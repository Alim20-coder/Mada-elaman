document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.reveal');
    setTimeout(() => heroContent.classList.add('active'), 300);

    const counters = document.querySelectorAll('.counter');
    
    const runCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const step = target / 50; // سرعة العداد
            
            const update = () => {
                const current = +counter.innerText;
                if (current < target) {
                    counter.innerText = Math.ceil(current + step);
                    setTimeout(update, 70);
                } else {
                    counter.innerText = target + "+";
                }
            };
            update();
        });
    };

    runCounters();
});

// Hero End 
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
});

// About end 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Service Logic End 
document.addEventListener('DOMContentLoaded', () => {
    // 1. مصفوفة البيانات (المحتوى)
    const servicesData = [
        {
            title: "تمديد مواسير الغاز المركزي للعماير بالمدينة المنورة",
            desc: "نقدم حلولاً متكاملة لتمديد شبكات الغاز المركزي للمجمعات السكنية بأحدث المواصفات.",
            img: "./Style/Photos/1.jpeg" // ضع مسار الصورة هنا
        },
        {
            title: "شركة تمديد غاز بالمدينة المنورة",
            desc: "تركيب وتمديد صمامات الأمان الأوتوماتيكية لحماية منزلك.",
            img: "./Style/Photos/2.jpeg"
        },
        {
            title: "شركة تركيب أجهزة السلامة للغاز بالمدينة المنورة",
            desc: "تصميم وتنفيذ شبكات غاز قوية تتحمل ضغط العمل العالي وتركيب أحدث صمامات الأمان لضمان السلامة.",
            img: "./Style/Photos/3.jpeg"
        },
        {
            title: "شركة تمديد غاز للمطاعم بالمدينة المنورة",
            desc: "توفير وتركيب منظمات الغاز الأصلية لضمان ثبات الضغط وتحمل الضغط العالي  بالمطاعم المركزية.",
            img: "./Style/Photos/4.jpeg"
        },
        {
            title: "شركة تركيب خزانات الغاز المركزي بالمدينة المنورة",
            desc: "خبراء في اختيار وتثبيت خزانات الغاز المركزي بمختلف السعات للمنشآت.",
            img: "./Style/Photos/5.jpeg"
        },
        {
            title: "بيع خزانات بالمدينة المنورة",
            desc: "بيع جميع أنواع الخزانات بالمدينة المنورة ",
            img: "./Style/Photos/6.jpeg"
        },
        {
            title: "شركة كشف تسريب الغاز بالمدينة المنورة",
            desc: "خدمات صيانة دورية ووقائية لضمان سلامة الخزانات والشبكات طوال العام.",
            img: "./Style/Photos/7.jpeg"
        },
        {
            title: "شركة صيانة خزانات الغاز المركزي بالمدينة المنورة",
            desc: "تنفيذ مشروعات الغاز الصناعي الضخمة للمصانع والورش بكفاءة هندسية عالية.",
            img: "./Style/Photos/8.jpeg"
        }
    ];

    const container = document.getElementById('services-container');

    // 2. استخدام الـ Map لبناء الكاردات
    const servicesHTML = servicesData.map(service => `
        <div class="col-md-6 col-lg-3">
            <div class="service-card shadow-sm h-100">
                <div class="img-container">
                    <img src="${service.img}" alt="${service.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Space'">
                </div>
                <div class="card-body-content text-center">
                    <h5 class="fw-bold text-navy">${service.title}</h5>
                    <p class="text-muted small mb-0">${service.desc}</p>
                </div>
            </div>
        </div>
    `).join('');

    // 3. حقن الكود في الصفحة
    container.innerHTML = servicesHTML;

});
// Free End 
(function() {
    // مصفوفة ببيانات فريدة لعدم التداخل مع الماب القديم
    const itqanSpecificFeatures = [
        {
            f_id: "01",
            f_title: "فريق هندسي متخصص",
            f_desc: "نمتلك نخبة من المهندسين والفنيين ذوي الخبرة الطويلة في إدارة وتنفيذ أضخم مشاريع المقاولات وتمديدات الغاز.",
            f_icon: "bi-people-fill"
        },
        {
            f_id: "02",
            f_title: "أعلى معايير الأمان",
            f_desc: "نلتزم بدقة متناهية بكافة اشتراطات السلامة العالمية لضمان حماية المنشآت والأفراد في كل مشروع ننفذه.",
            f_icon: "bi-shield-check"
        },
        {
            f_id: "03",
            f_title: "دقة في المواعيد",
            f_desc: "وقتك ثمين، لذا نلتزم بجدول زمني صارم في التنفيذ والتسليم دون أي تأخير، مع الحفاظ على جودة العمل.",
            f_icon: "bi-clock-history"
        },
        {
            f_id: "04",
            f_title: "دعم فني مستمر",
            f_desc: "علاقتنا لا تنتهي بالتسليم؛ فريقنا متاح دائماً لتقديم الدعم الفني والاستشارات والصيانة الدورية لضمان كفاءة العمل.",
            f_icon: "bi-headset"
        }
    ];

    const targetWrapper = document.getElementById('itqan-features-display');
    
    if(targetWrapper) {
        // استخدام متغيرات داخل الماب مختلفة تماماً
        const itqanMappedContent = itqanSpecificFeatures.map(feat => `
            <div class="col-md-6 col-lg-5">
                <div class="feature-card shadow-sm h-100 border-0">
                    <span class="feature-number">${feat.f_id}</span>
                    <div class="feature-icon">
                        <i class="bi ${feat.f_icon}"></i>
                    </div>
                    <h4 class="fw-bold text-navy mb-3">${feat.f_title}</h4>
                    <p class="text-muted mb-0 lh-base">
                        ${feat.f_desc}
                    </p>
                </div>
            </div>
        `).join('');

        targetWrapper.innerHTML = itqanMappedContent;
    }
})();
