// app.component.ts
import { Component } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})


export class AppComponent {
  portfolio: Portfolio = {
    name: 'Akash Sureshkumar',
    email: 'asureshk@buffalo.edu',
    phone: '716-709-0514',
    linkedin: 'https://www.linkedin.com/in/akash-sureshkumar/',
    skills: ['Python', 'R', 'Java', 'JavaScript', 'MySQL', 'AWS', 'TensorFlow', 'Spring Boot'],
    education: [
      {
        degree: 'Master of Engineering Science in Data Science',
        institution: 'University at Buffalo',
        duration: 'Aug 2024 - Dec 2025'
      },
      {
        degree: 'Bachelor of Engineering in Computer Science Engineering',
        institution: 'Sri Sairam Engineering College',
        duration: 'Aug 2018 - Jun 2022'
      }
    ],
    experience: [
      {
        position: 'Software Engineer',
        company: 'Guardian India Operations Private Limited',
        duration: 'Apr 2022 - Aug 2024',
        responsibilities: [
          'Developed REST APIs using Java and Spring Boot.',
          'Achieved 95% test coverage with JUnit and Mockito.',
          'Implemented AWS CloudWatch monitoring and Splunk logging.'
        ]
      }
    ],
    projects: [
      {
        title: 'Trading Assist Application for Stock Market',
        description: 'Built a stock prediction system using LSTM models.',
        technologies: ['R', 'TensorFlow', 'Keras']
      },
      {
        title: 'Predictive Analytics for Diabetes',
        description: 'Developed a predictive analytics model using ML techniques.',
        technologies: ['Python', 'SQLite', 'Docker', 'Streamlit']
      }
    ]
  };
}
