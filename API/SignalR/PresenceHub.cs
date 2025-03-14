using System;
using API.Extensions;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class PresenceHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            if (Context.User == null) throw new HubException("Cannot get current user claim");
            await Clients.Others.SendAsync("UserIsOnline", Context.User?.GetUserId());
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            if (Context.User == null) throw new HubException("Cannot get current user claim");

            await Clients.Others.SendAsync("UserIsOffline", Context.User?.GetUserId());
        }
    }
}
