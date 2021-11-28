using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PassportCard.DTO;
using PassportCard.DTO.ViewModels;

namespace PassportCard.BL.Services
{
    public class PostService: IPostService
    {
        private const int POST_PER_PAGE = 5;
        private readonly IPostRepository _postRepository;

        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        public async Task<PostPageViewModel> GetPosts(int page = 1,string searchInput = "")
        {
            if (string.IsNullOrEmpty(searchInput))
            {
                searchInput = "";
            }
            var pagedPosts = _postRepository.GetPosts()

                .Where(p => p.Title.ToLower().Contains(searchInput.ToLower()))
                .Take(POST_PER_PAGE * page)
                .Select(p => new PostViewModel()
            {
                Id = p.Id,
                Content = p.Content,
                Likes = p.Likes,
                Shares = p.Shares,
                Title = p.Title
            }).ToList();
            var postsCount = _postRepository
                .GetPosts()
                .Count(p => p.Title.ToLower().Contains(searchInput.ToLower()));
            return new PostPageViewModel()
            {
                Posts = pagedPosts,
                PostCount = postsCount
            };
        }
    }
}
