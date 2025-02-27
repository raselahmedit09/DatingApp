using System;
using API.DTOs;
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
        public async Task<ActionResult<MessageDto>> SendMessage(CreateMessageDto createMessageDto)
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
                Content = createMessageDto.Content
            };

            // await _unitOfWork._memberRepository.Add(_mapper.Map<Member>(createMemberDto));
            // await _unitOfWork.CompleteAsync();

            // _messageRepository.AddMessage(message);

            // if (await _messageRepository.SaveAllAsync()) return Ok(_mapper.Map<MessageDto>(message));

            return BadRequest("Failed to send message");
        }



    }
}
