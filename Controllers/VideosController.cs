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
        // GET: api/Videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> GetVideos()
        {

            var test = await _context.Videos.ToListAsync();
            return Ok(test);
        }
    }
}
