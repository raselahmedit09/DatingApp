using System;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class MessagesController : BaseApiController
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public MessagesController(IMapper mapper,
            ILogger<MessagesController> logger,
            IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        [AllowAnonymous]
        [HttpPost("SendMessage")]
        public async Task<ActionResult<MessageResponseDto>> SendMessage(CreateMessageDto createMessageDto)
        {
            var currentUserId = User.GetUserId();

            if (currentUserId == createMessageDto.RecipientUserId)
                return BadRequest("You cannot send messages to yourself");

            var recipient = await _unitOfWork._userRepository.GetUserByUserName(createMessageDto.RecipientUserName);

            if (recipient == null) return NotFound();

            CreateMessageDto sendMessage = new CreateMessageDto
            {
                SenderUserId = currentUserId,
                RecipientUserId = createMessageDto.RecipientUserId,
                Content = createMessageDto.Content,
                RecipientUserName = createMessageDto.RecipientUserName,
                MessageSent = DateTime.UtcNow
            };

            var message = await _unitOfWork._messagesRepository.AddAndReturnAsync(_mapper.Map<Message>(sendMessage));
            return Ok(_mapper.Map<MessageResponseDto>(message));
        }
    }
}
