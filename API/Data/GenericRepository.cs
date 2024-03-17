using API.Data;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    protected DataContext _dataContext;
    protected DbSet<T> dbSet;
    protected readonly ILogger _logger;

    public GenericRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
        this.dbSet = _dataContext.Set<T>();
    }

    public virtual async Task<IEnumerable<T>> GetAll() // virtual means that this method can be overriden by a class that inherits from this class
    {
        return await dbSet.ToListAsync();
    }

    public virtual async Task<T> GetById(int id)
    {
        try
        {
            return await dbSet.FindAsync(id);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error getting entity with id {Id}", id);
            return null;
        }
    }

    public virtual async Task<bool> Add(T entity)
    {
        try
        {
            await dbSet.AddAsync(entity);
            return true;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error adding entity");
            return false;
        }
    }

    public virtual async Task<bool> Delete(int id)
    {
        try
        {
            var entity = await dbSet.FindAsync(id);
            if (entity != null)
            {
                dbSet.Remove(entity);
                return true;
            }
            else
            {
                _logger.LogWarning("Entity with id {Id} not found for deletion", id);
                return false;
            }
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error deleting entity with id {Id}", id);
            return false;
        }
    }


    public virtual async Task<bool> Update(T entity)
    {
        try
        {
            dbSet.Update(entity);
            return true;

        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error updating entity");
            return false;
        }
    }

}
