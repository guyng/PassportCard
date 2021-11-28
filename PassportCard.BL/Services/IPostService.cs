using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PassportCard.DTO;
using PassportCard.DTO.ViewModels;

namespace PassportCard.BL.Services
{
    public interface IPostService
    {
        Task<PostPageViewModel> GetPosts(int page = 0,string searchInput = "");
    }
}
