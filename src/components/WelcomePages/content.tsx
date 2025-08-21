import image1 from '../../assets/secondpage.png'
import image2 from '../../assets/lastpage.png'
import image3 from '../../assets/pagethree.png'
import image4 from '../../assets/firstpage.png'
interface PageContent {
  title: string;
  intro: string;
  btnText: string;
  urlImg:React.ReactNode;
}

const page=[
    {
        title:"Welcome to TaskMate",
        intro:"Welcome to TaskMate — your friendly space to plan, prioritize, and conquer your day. Whether it’s work, school, or personal goals, we’re here to keep you on track and stress-free.",
        btnText:"Next",
        urlImg:image4
    },
    {
        title: "Stay Organized Effortlessly",
        intro:"Add your tasks in seconds, update them anytime, and check them off with a single tap. Staying organized has never been this simple.",
        btnText:"Next",
        urlImg:image1
    },
    {
        title: "Plan Your Days",
        intro:"Easily manage deadlines, meetings, and personal events all in one place. See your schedule at a glance and never miss what matters most.",
        btnText:"Next",
        urlImg:image3
    },
    {
        title: "Your Personal Task Archive",
        intro:"Keep a neat archive of your completed tasks and notes. Look back anytime to review, reuse, or celebrate the progress you’ve made.",
        btnText:"Get started",
        urlImg:image2
    }
        ]
    export default page;