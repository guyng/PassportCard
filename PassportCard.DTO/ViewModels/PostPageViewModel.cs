using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassportCard.DTO.ViewModels
{
    public class PostPageViewModel
    {
        public List<PostViewModel> Posts { get; set; }
        public int PostCount { get; set; }
    }
}
