// Images
import portfolio from '../assets/projects/portfolio.png';
import hamspam from '../assets/projects/hamspam.png';
import urlshort from '../assets/projects/url-shortner.png';

import work_hour_tracker from '../assets/projects/attendance_tracking_system.webp';
import cryptotrans from '../assets/projects/crytotrans.png';

const Projects = [


	{
		domain: 'Web Development',
		image: cryptotrans,
		title: 'Cryto-Transaction API',
		github: 'https://github.com/kumar-commits/Cryto-Transactions',
		desc: ' Designed a secure Crypto Transaction API to streamline cryptocurrency transfers, using Node.js for efficient processing and Docker for containerized deployment. Built with a focus on scalability and security, it implements RESTful architecture to ensure quick and reliable transactions. Includes comprehensive error handling and JWT-based authentication, boosting security while achieving near-instant response times, optimized for performance and minimal latency.',
	},
	
	{
		domain: 'Web Development',
		image: hamspam,
		title: 'Ham-Spam Detection',
		github: 'https://github.com/kumar-commits/ham-spam-prediction',
		desc: (
			<>
				Developed a robust ham-spam detection application using NLP and machine learning in Python, deployed via Streamlit for accessibility. Leveraged text processing and classification algorithms to deliver real-time message categorization with high accuracy, enhancing user productivity by reducing message clutter. Integrated intuitive UI for user-friendly interaction and swift message filtering, driving 40% improvement in spam detection efficiency in testing environments.
			</>
		),
	},
	

	{
		domain: 'Computer Security',
		image: urlshort,
		title: 'Url-Shortner',
		github: 'https://github.com/kumar-commits/URL-Shortner',
		desc: 'Developed a URL Shortener app that converts lengthy URLs into concise links, simplifying link sharing and tracking. Integrated real-time analytics to monitor link usage, offering insights on user engagement. Built with a focus on performance and minimal latency, ensuring efficient redirection and user convenience.' ,
	},
	
	{
		domain: 'Web Development',
		image: work_hour_tracker,
		title: 'Work Hour Tracker',
		desc: (
			<>
				It is a web-based platform designed to streamline the process of recording,
				tracking, and approving employee working hours. The main goal of this project
				is to create a simple and efficient system that makes it easy for employees
				to log their hours worked and for managers to approve or deny these hours.,
			</>
		),
	},
	{
		domain: 'Web Development',
		image: portfolio,
		title: 'Personal Portfolio',
		desc: 'HTML, TailWind, JavaScript, EmailJs, ReactJs.',
	},
];

export default Projects;
