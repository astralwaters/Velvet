using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Velvet.DataAccess.Repository.IRepository;
using Velvet.Models;
using VelvetWeb.DataAccess;

namespace Velvet.DataAccess.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext _db;

        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
            Category = new CategoryRepository(_db);
        }
        public ICategoryRepository Category { get; private set; }

        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
