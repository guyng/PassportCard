using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PassportCard.BL.Services;

namespace PassportCard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts([FromQuery]int page = 0,string searchInput = "")
        {
            var posts = await _postService.GetPosts(page,searchInput);
            return Ok(posts);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePost([FromQuery] int postId)
        {
        //    var posts = await _postService.DeletePost(postId);
            return Ok();
        }
    }
}
