using System.Data;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace API.Extensions;

public static class DbContextExtensions
{
    public static async Task<List<T>> GetListAsync<T>(this DbContext dbContext, string query, CommandType sqlCommandType = CommandType.Text, object param = null)
    {
        var connection = dbContext.Database.GetDbConnection();
        var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();

        var commandDefination = new CommandDefinition(query, param, transaction, 0, sqlCommandType);

        var list = await connection.QueryAsync<T>(commandDefination);

        return list.ToList();

    }
}
