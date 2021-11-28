using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PassportCard.DAL;

namespace PassportCard.DTO
{
    public interface IPostRepository
    {
        Task AddPost(Post post);

        Task UpdatePost(Post post);
        IEnumerable<Post> GetPosts();

        Task DeletePost(int postId);


    }
}
