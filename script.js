// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEaoHzpmDy1Os-A4bmGCo_qYRh-CiKoCQ",
    authDomain: "nodirportfolio.firebaseapp.com",
    projectId: "nodirportfolio",
    storageBucket: "nodirportfolio.firebasestorage.app",
    messagingSenderId: "401004834954",
    appId: "1:401004834954:web:70e307d3d15bb78daa7d73",
    measurementId: "G-B4QT9HPJMP",
    databaseURL: "https://nodirportfolio-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', body.getAttribute('data-theme'));
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Side Navigation
const menuToggle = document.querySelector('.menu-toggle');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    sideNav.style.width = '300px';
});

closeBtn.addEventListener('click', () => {
    sideNav.style.width = '0';
});

// Language Switching
const langButtons = document.querySelectorAll('.lang-btn');
const langElements = document.querySelectorAll('[data-lang-key]');

const translations = {
    en: {
        'hero-title': 'Hey, I\'m <span>Nodirbek</span>',
        'hero-subtitle': 'Motion Designer & Visual Storyteller',
        'hero-text': 'Creating engaging motion graphics that bring ideas to life and captivate audiences.',
        'view-work': 'View My Work',
        'work-title': 'My Work',
        'about-title': 'About Me',
        'about-text1': 'I\'m a passionate motion designer with 5 years of experience creating compelling visual stories. My work focuses on delivering messages through engaging animations that resonate with audiences.',
        'about-text2': 'I specialize in explainer videos, animated logos, UI/UX animations, and advertising content that helps brands communicate effectively.',
        'skills-title1': 'Technical Skills',
        'skills-title2': 'Design Skills',
        'contact-title': 'Get In Touch'
    },
    ru: {
        'hero-title': 'Привет, я <span>Нодирбек</span>',
        'hero-subtitle': 'Моушн-дизайнер и визуальный рассказчик',
        'hero-text': 'Создаю увлекательную моушн-графику, которая оживляет идеи и захватывает аудиторию.',
        'view-work': 'Мои работы',
        'work-title': 'Мои работы',
        'about-title': 'Обо мне',
        'about-text1': 'Я увлеченный моушн-дизайнер с 5-летним опытом создания впечатляющих визуальных историй. Моя работа сосредоточена на передаче сообщений через увлекательную анимацию, которая находит отклик у аудитории.',
        'about-text2': 'Я специализируюсь на объясняющих видео, анимированных логотипах, анимации UI/UX и рекламном контенте, который помогает брендам эффективно коммуницировать.',
        'skills-title1': 'Технические навыки',
        'skills-title2': 'Дизайнерские навыки',
        'contact-title': 'Связаться со мной'
    },
    uz: {
        'hero-title': 'Salom, men <span>Nodirbek</span>',
        'hero-subtitle': 'Motion Dizayner va Vizual Hikoyachi',
        'hero-text': 'G\'oyalarni hayotga olib keladigan va tomoshabinlarni o\'ziga jalb etadigan qiziqarli motion grafikalar yarataman.',
        'view-work': 'Ishlarimni ko\'rish',
        'work-title': 'Mening Ishlarim',
        'about-title': 'Men haqimda',
        'about-text1': 'Men 5 yillik tajribaga ega, qiziqarli vizual hikoyalar yaratuvchi motion dizaynerman. Ishlarim auditoriyaga ta\'sir qiladigan animatsiyalar orqali xabarlarni etkazishga qaratilgan.',
        'about-text2': 'Men tushuntiruvchi videolar, animatsion logotiplar, UI/UX animatsiyalari va brendlarga samarali muloqot qilishga yordam beradigan reklama kontentida ixtisoslashganman.',
        'skills-title1': 'Texnik ko\'nikmalar',
        'skills-title2': 'Dizayn ko\'nikmalari',
        'contact-title': 'Bog\'lanish'
    }
};

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
        
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function changeLanguage(lang) {
    langElements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// Videos Data
const videos = [
    {
        title: "Krasovka Reklamasi",
        description: "Nike brendidagi krasovka animatsion holatda",
        thumbnail: "assets/images/Screenshot1.png",
        videoSrc: "assets/videos/Video1.mp4"
    },
    {
        title: "Taklifnoma Animatsiyasi",
        description: "To'y (Tug'ilgan) kuni uchun taklifnoma animatsiyasi",
        thumbnail: "assets/images/Screenshot7.png",
        videoSrc: "assets/videos/Video7.mp4"
    },
    {
        title: "Ichimlik Sharbati",
        description: "After Effects yordamida yaratilgan ichimlik sharbati reklama animatsiyasi",
        thumbnail: "assets/images/Screenshot2.png",
        videoSrc: "assets/videos/Video2.mp4"
    },
    {
        title: "Mantaj Animatsiyasi",
        description: "Motion Graphics yordamida yaratilgan mantaj animatsiyasi",
        thumbnail: "assets/images/Screenshot4.png",
        videoSrc: "assets/videos/Video4.mp4"
    },
    {
        title: "WATCHCO",
        description: "UI/UX Android ilovasi uchun animatsiya",
        thumbnail: "assets/images/Screenshot3.png",
        videoSrc: "assets/videos/Video3.mp4"
    },
    {
        title: "Toshkent City",
        description: "Instagram uchun yaratilgan Toshkent City reels animatsiyasi",
        thumbnail: "assets/images/Screenshot6.png",
        videoSrc: "assets/videos/Video6.mp4"
    },
    {
        title: "Charxpalak o'yini",
        description: "Bolalar uchun o'yin animatsiyasi",
        thumbnail: "assets/images/Screenshot5.png",
        videoSrc: "assets/videos/Video5.mp4"
    },
];

// Load Videos with counters
function loadVideos() {
    const workGrid = document.querySelector('.work-grid');
    
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card fade-in';
        
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail-img">
                <video class="video-player" preload="metadata" loop>
                    <source src="${video.videoSrc}" type="video/mp4">
                </video>
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-content">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <div class="click-counters" id="counters-video${index + 1}">
                    <div class="click-counter view-counter">
                        <i class="fas fa-eye"></i> <span class="view-count">0</span>
                    </div>
                    <div class="click-counter like-counter">
                        <i class="fas fa-heart"></i> <span class="like-count">0</span>
                    </div>
                </div>
                <button class="btn feedback-btn" data-project="${video.title}">Leave Feedback</button>
            </div>
        `;
        
        workGrid.appendChild(videoCard);
        
        // Load view and like counts for this video
        loadVideoCounts(index + 1);
        
        // Set up video hover play
        const thumbnail = videoCard.querySelector('.video-thumbnail');
        const videoPlayer = videoCard.querySelector('.video-player');
        
        thumbnail.addEventListener('mouseenter', () => {
            videoPlayer.muted = true;
            videoPlayer.play();
            thumbnail.querySelector('.play-overlay').style.opacity = '1';
        });
        
        thumbnail.addEventListener('mouseleave', () => {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            thumbnail.querySelector('.play-overlay').style.opacity = '0';
        });
        
        thumbnail.addEventListener('click', () => {
            trackVideoView(index + 1);
            openFullscreenVideo(video.videoSrc);
        });
        
        // Like button functionality
        const likeCounter = videoCard.querySelector('.like-counter');
        likeCounter.addEventListener('click', () => {
            trackVideoLike(index + 1);
        });
    });

    // Add event listeners to feedback buttons
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentProject = e.target.getAttribute('data-project');
            openFeedbackModal(currentProject);
        });
    });
}

// Fullscreen Video Modal
const videoModal = document.getElementById('video-modal');
const fullscreenVideo = document.getElementById('fullscreen-video');
const closeVideoModal = document.querySelector('.close-video-modal');

function openFullscreenVideo(videoSrc) {
    fullscreenVideo.src = videoSrc;
    fullscreenVideo.muted = false;
    videoModal.style.display = 'block';
    fullscreenVideo.play();
}

function closeFullscreenVideo() {
    fullscreenVideo.pause();
    videoModal.style.display = 'none';
}

closeVideoModal.addEventListener('click', closeFullscreenVideo);
window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeFullscreenVideo();
    }
});

// Load view and like counts from Firebase
function loadVideoCounts(videoId) {
    const viewsRef = database.ref(`videos/video${videoId}/views`);
    const likesRef = database.ref(`videos/video${videoId}/likes`);
    
    viewsRef.on('value', (snapshot) => {
        const viewCount = snapshot.val() || 0;
        document.querySelector(`#counters-video${videoId} .view-count`).textContent = viewCount;
    });
    
    likesRef.on('value', (snapshot) => {
        const likeCount = snapshot.val() || 0;
        document.querySelector(`#counters-video${videoId} .like-count`).textContent = likeCount;
    });
}

// Track video views
function trackVideoView(videoId) {
    const viewsRef = database.ref(`videos/video${videoId}/views`);
    viewsRef.transaction((currentCount) => {
        return (currentCount || 0) + 1;
    });
}

// Track video likes
function trackVideoLike(videoId) {
    const likesRef = database.ref(`videos/video${videoId}/likes`);
    likesRef.transaction((currentCount) => {
        return (currentCount || 0) + 1;
    });
}

// Feedback Modal elements and functions
const modal = document.getElementById('feedback-modal');
const modalTitle = document.getElementById('modal-project-title');
const closeModal = document.querySelector('.close-modal');
const stars = document.querySelectorAll('.stars i');
const commentText = document.getElementById('comment-text');
const submitFeedback = document.getElementById('submit-feedback');
const feedbackList = document.getElementById('feedback-list');

let currentProject = null;
let selectedRating = 0;

function openFeedbackModal(projectName) {
    modalTitle.textContent = `Feedback for ${projectName}`;
    modal.style.display = 'block';
    selectedRating = 0;
    commentText.value = '';
    updateStars();
    loadFeedback(projectName);
}

function closeFeedbackModal() {
    modal.style.display = 'none';
}

function updateStars() {
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-rating'));
        updateStars();
    });
});

submitFeedback.addEventListener('click', () => {
    if (selectedRating === 0) {
        alert('Please select a rating before submitting.');
        return;
    }

    const feedback = {
        project: currentProject,
        rating: selectedRating,
        comment: commentText.value,
        date: new Date().toISOString(),
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    const feedbackRef = database.ref(`projects/${currentProject}/feedback`);
    feedbackRef.push(feedback)
        .then(() => {
            alert('Thank you for your feedback!');
            commentText.value = '';
            selectedRating = 0;
            updateStars();
            loadFeedback(currentProject);
        })
        .catch((error) => {
            console.error('Error submitting feedback:', error);
            alert('There was an error submitting your feedback. Please try again.');
        });
});

function loadFeedback(projectName) {
    feedbackList.innerHTML = '<p>Loading feedback...</p>';
    
    const feedbackRef = database.ref(`projects/${projectName}/feedback`).orderByChild('timestamp').limitToLast(5);
    feedbackRef.once('value')
        .then((snapshot) => {
            if (!snapshot.exists()) {
                feedbackList.innerHTML = '<p>No feedback yet. Be the first to leave one!</p>';
                return;
            }

            feedbackList.innerHTML = '';
            const feedbacks = [];
            
            snapshot.forEach((childSnapshot) => {
                feedbacks.push(childSnapshot.val());
            });

            feedbacks.reverse().forEach((item) => {
                const feedbackItem = document.createElement('div');
                feedbackItem.className = 'feedback-item';
                
                let starsHtml = '';
                for (let i = 0; i < 5; i++) {
                    starsHtml += i < item.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                }
                
                const date = new Date(item.date);
                const formattedDate = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                feedbackItem.innerHTML = `
                    <div class="rating">${starsHtml}</div>
                    ${item.comment ? `<div class="comment">"${item.comment}"</div>` : ''}
                    <div class="date">${formattedDate}</div>
                `;
                
                feedbackList.appendChild(feedbackItem);
            });
        })
        .catch((error) => {
            console.error('Error loading feedback:', error);
            feedbackList.innerHTML = '<p>Error loading feedback. Please try again later.</p>';
        });
}

closeModal.addEventListener('click', closeFeedbackModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeFeedbackModal();
    }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadVideos();
    
    // Add scroll animation to sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Rotating rectangle animation for motion examples
    const rotatingRects = document.querySelectorAll('.rotating-rect');
    rotatingRects.forEach(rect => {
        rect.addEventListener('mouseenter', () => {
            rect.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        rect.addEventListener('mouseleave', () => {
            rect.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Profile image animation
    const profileImage = document.querySelector('.hero-image img');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.1)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1)';
        });
    }
});
