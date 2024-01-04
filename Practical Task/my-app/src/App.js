import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MainPage from "./components/MainPage";

function App() {
  const jsonData = {
    "instructor": {
      "name": "Nityanand Charan Das",
      "social_media": {
        "facebook": true,
        "twitter": true,
        "youtube": true,
        "instagram": true
      }
    },
    "course": {
      "title": "Mindful Living: Lessons from the Bhagavad Gita",
      "fee": {
        "amount": 5000,
        "currency": "INR"
      },
      "inclusions": {
        "on_demand_videos": 10,
        "live_qa_sessions": true,
        "whatsapp_community": true
      },
      "about": {
        "html_content": "Explore the art of mindful living through lessons on managing relationships, effective communication, time management, and the power of forgiveness."
      },
      "what_to_expect": {
        "html_content_1": "Learn to manage your relationships mindfully. Enhance your communication skills.",
        "html_content_2":"Master the art of time management. ",
        "html_content_3":"Discover the transformative power of forgiveness."
      },
      "key_topics": {
        "html_content_1": "10 sessions decoding the language of numbers for insightful messages.",
        "html_content_2":"Intuitive exercises to understand the energies and values of numbers.",
        "html_content_3":"Handy reference to numerical meanings, uncovering your soul's gifts, challenges, and purpose. ",
        "html_content_4":"Expert techniques for manifestation using the power of numbers."
      }
    },
    "about_instructor": {
      "html_content": "Discover the wisdom of mindful living from Nityanand Charan Das, an experienced instructor with a rich background and a deep philosophy rooted in the teachings of the Bhagavad Gita.Discover the wisdom of mindful living from Nityanand Charan Das, an experienced instructor with a rich background and a deep philosophy rooted in the teachings of the Bhagavad Gita."
    },
    "testimonial": {
      "text": "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born. I will give you a complete account of the system.",
      "reviewer_name": "John Doe",
      "reviewer_designation": "Mindfulness Enthusiast"
    }
  }
  

  return (
    <div>
      <Home data={jsonData}/>
      <MainPage data={jsonData} />
    </div>
  );
}

export default App;
