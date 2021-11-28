using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PassportCard.DTO;

namespace PassportCard.DAL
{
    public class PostRepository : IPostRepository
    {
        public ConcurrentBag<Post> Posts { get; set; } = new()
        {
            new()
            {
                Id = 1,
                Title = ".NET 6 Release Date",
                Content =
                    "Welcome to .NET 6. Today’s release is the result of just over a year’s worth of effort by the .NET Team and community. C# 10 and F# 6 deliver language improvements that make your code simpler and better. There are massive gains in performance, which we’ve seen dropping the cost of hosting cloud services at Microsoft",
                Likes = new Random().Next(1,999),
                Shares = new Random().Next(1,100),
            },
            new()
            {
                Id = 2,
                Title = ".NET 5 Release Date",
                Content =
                    "Welcome to .NET 5. Today’s release is the result of just over a year’s worth of effort by the .NET Team and community. C# 10 and F# 6 deliver language improvements that make your code simpler and better. There are massive gains in performance, which we’ve seen dropping the cost of hosting cloud services at Microsoft",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 3,
                Title = "Angular 13 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 4,
                Title = "Angular 12 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 5,
                Title = "Angular 11 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 6,
                Title = "Angular 10 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 7,
                Title = "Angular 9 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 8,
                Title = "Angular 8 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 9,
                Title = "Angular 7 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 10,
                Title = "Angular 6 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 11,
                Title = "Angular 5 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 12,
                Title = "Angular 4 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 13,
                Title = "Angular 2 Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            },
            new()
            {
                Id = 14,
                Title = "AngularJS Release Date",
                Content =
                    "We’re back with the brand new release of Angular v13 to share with all of you! This latest release brings all sorts of updates and features to help your teams build great apps.",
                Likes = new Random().Next(1, 999),
                Shares = new Random().Next(1, 100),
            }

        };
        public async Task AddPost(Post post)
        {
            await Task.Run(() => Posts.Add(post));
        }

        public async Task UpdatePost(Post post)
        {
            await Task.Run(() =>
            {
                var exist = Posts.FirstOrDefault(p => p.Id == post.Id);
                if (exist != null)
                {
                  /// copy post data into existing object...
                }
            });
        }

        public IEnumerable<Post> GetPosts()
        {
            return Posts.ToList();
        }

        public async Task DeletePost(int postId)
        {
            await Task.Run(() =>
            {
                var postsList = Posts.ToList();
                var exist = postsList.FirstOrDefault(p => p.Id == postId);
                if (exist != null)
                {
                    postsList.Remove(exist);
                    Posts = new ConcurrentBag<Post>(postsList);
                }
            });
        }
    }
}
