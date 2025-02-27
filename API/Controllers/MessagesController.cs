using System;
using API.DTOs;
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
            // var username = User.GetUsername();

            // if (username == createMessageDto.RecipientUsername.ToLower())
            //     return BadRequest("You cannot send messages to yourself");

            // var sender = await _userRepository.GetUserByUsernameAsync(username);
            // var recipient = await _userRepository.GetUserByUsernameAsync(createMessageDto.RecipientUsername);

            // if (recipient == null) return NotFound();

            // var message = new Message
            // {
            //     Sender = sender,
            //     Recipient = recipient,
            //     SenderUsername = sender.UserName,
            //     RecipientUsername = recipient.UserName,
            //     Content = createMessageDto.Content
            // };

            // _messageRepository.AddMessage(message);

            // if (await _messageRepository.SaveAllAsync()) return Ok(_mapper.Map<MessageDto>(message));

            return BadRequest("Failed to send message");
        }



    }
}
