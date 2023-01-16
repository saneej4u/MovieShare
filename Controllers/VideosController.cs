using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieShare.Data;
using MovieShare.Models;

namespace MovieShare.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public VideosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VideoViewModel>>> GetVideos()
        {
            var videoEntity = await _context.Videos.ToListAsync();
            var viewModel = videoEntity.Select(x => new VideoViewModel
            {
                Title = x.Title,
                Description = x.Description,
                VideoLinks = x.VideoLinks
            });

            return Ok(viewModel);
        }
    }
}
