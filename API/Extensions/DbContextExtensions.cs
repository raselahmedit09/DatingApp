using System.Data;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace API.Extensions;

public static class DbContextExtensions
{
    public static async Task<IEnumerable<T>> GetListAsync<T>(this DbContext dbContext, string query, CommandType sqlCommandType = CommandType.Text, object param = null)
    {
        var connection = dbContext.Database.GetDbConnection();
        var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();
        var commandDefination = new CommandDefinition(query, param, transaction, 0, sqlCommandType);

        return await connection.QueryAsync<T>(commandDefination);
    }
    public static async Task<T> GetSingleAsync<T>(this DbContext dbContext, string query, CommandType sqlCommandType = CommandType.Text, object? param = null)
    {
        var connection = dbContext.Database.GetDbConnection();
        var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();
        var commandDefination = new CommandDefinition(query, param, transaction, 0, sqlCommandType);

        return await connection.QueryFirstOrDefaultAsync<T>(commandDefination);
    }

    public static async Task<T> GetScalarAsync<T>(this DbContext dbContext, string query, CommandType sqlCommandType = CommandType.Text, object? param = null)
    {
        var connection = dbContext.Database.GetDbConnection();
        var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();
        var commandDefination = new CommandDefinition(query, param, transaction, 0, sqlCommandType);

        return await connection.ExecuteScalarAsync<T>(commandDefination);
    }

    public static async Task<int> ExecuteAsync(this DbContext dbContext, string query, CommandType sqlCommandType = CommandType.Text, object? param = null)
    {
        var connection = dbContext.Database.GetDbConnection();
        var transaction = dbContext.Database.CurrentTransaction?.GetDbTransaction();
        var commandDefination = new CommandDefinition(query, param, transaction, 0, sqlCommandType);

        return await connection.ExecuteAsync(commandDefination);
    }


}
