using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission4_sweet28.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int groupProject { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100")]
        public int intex { get; set; }
    }
}
