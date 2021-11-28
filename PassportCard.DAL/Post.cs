using System;

namespace PassportCard.DAL
{
    public class Post
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
        public int Shares { get; set; }
    }
}
