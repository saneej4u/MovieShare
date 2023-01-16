namespace MovieShare.Models
{
    public class Video
    {
        public int Id { get; set; }
        public string VideoLinks { get; set; }
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
