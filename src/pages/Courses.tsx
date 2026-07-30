import React, { useState } from 'react';

interface Course {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  curriculum: { module: string; topics: string[] }[];
}

const COURSES: Course[] = [
  {
    id: 'executive-leadership',
    title: 'Executive Leadership & Strategic Management',
    price: 'KES 45,000',
    duration: '12 Weeks',
    description: 'Designed for executives, directors, and senior managers seeking to elevate their strategic vision, organizational alignment, and team performance in complex corporate environments.',
    curriculum: [
      {
        module: 'Module 1: Strategic Thinking & Competitive Positioning',
        topics: [
          'Analyzing industry trends and identifying growth opportunities',
          'Formulating long-term vision and actionable roadmaps',
          'Risk management and strategic pivoting frameworks'
        ]
      },
      {
        module: 'Module 2: High-Performance Team Leadership & Culture',
        topics: [
          'Building trust and alignment across cross-functional teams',
          'Motivating diverse workforces and managing performance KPIs',
          'Cultivating an inclusive, innovation-driven culture'
        ]
      },
      {
        module: 'Module 3: Financial Acumen & Corporate Governance',
        topics: [
          'Understanding corporate balance sheets, cash flow, and budgeting',
          'Capital allocation and measuring return on investment (ROI)',
          'Ethics, compliance, and boardroom dynamics'
        ]
      },
      {
        module: 'Module 4: Change Management & Agile Adaptation',
        topics: [
          'Leading organizations through transitions and restructuring',
          'Overcoming resistance to organizational change',
          'Embedding agility into standard operating procedures (SOPs)'
        ]
      }
    ]
  },
  {
    id: 'eq-managers',
    title: 'Emotional Intelligence (EQ) for Managers',
    price: 'KES 25,000',
    duration: '6 Weeks',
    description: 'Build the emotional awareness, interpersonal skills, and constructive conflict resolution frameworks that separate top-tier managers from average performers.',
    curriculum: [
      {
        module: 'Module 1: Core Self-Awareness & Trigger Identification',
        topics: [
          'Assessing personal EQ styles and behavioral tendencies',
          'Identifying triggers and practicing self-regulation under stress',
          'Cognitive reframing techniques for pressure situations'
        ]
      },
      {
        module: 'Module 2: Empathy, Active Listening & Communication',
        topics: [
          'Decoding non-verbal signals and micro-expressions',
          'Active listening methodologies that build psychological safety',
          'Constructive feedback delivery frameworks'
        ]
      },
      {
        module: 'Module 3: Workplace Conflict De-escalation',
        topics: [
          'The Thomas-Kilmann conflict mode instrument (TKI) application',
          'Resolving friction productively between subordinates or peers',
          'Negotiating win-win solutions without compromising accountability'
        ]
      },
      {
        module: 'Module 4: Developing a Positive Team Environment',
        topics: [
          'Creating a safe, high-trust environment where team members thrive',
          'Recognizing and preventing employee burnout',
          'Coaching team members using the GROW coaching model'
        ]
      }
    ]
  },
  {
    id: 'sales-growth',
    title: 'High-Performance Sales & Growth Strategy',
    price: 'KES 30,000',
    duration: '8 Weeks',
    description: 'Master the art of B2B prospecting, modern CRM systems, negotiation psychology, client lifecycle management, and high-ticket closing techniques.',
    curriculum: [
      {
        module: 'Module 1: Prospecting & Lead Generation',
        topics: [
          'Identifying target ICP (Ideal Customer Profile) and buying triggers',
          'Cold outreach strategies across LinkedIn, email, and phone',
          'Building high-quality lead pipelines'
        ]
      },
      {
        module: 'Module 2: The Art of Negotiating & Objection Handling',
        topics: [
          'Value-based selling and pricing justification strategies',
          'Diagnosing client pain points and aligning solution values',
          'Resolving common enterprise sales objections dynamically'
        ]
      },
      {
        module: 'Module 3: CRM Systems & Pipeline Management',
        topics: [
          'Configuring pipelines and tracking metrics in leading CRM tools',
          'Sales velocity, deal progression, and forecasting accuracy',
          'Time management and task prioritization for peak productivity'
        ]
      },
      {
        module: 'Module 4: Client Relationship Management & Retention',
        topics: [
          'Onboarding clients successfully to shorten time-to-value',
          'Account management, upselling, and cross-selling methodologies',
          'Customer health monitoring and proactive churn prevention'
        ]
      }
    ]
  },
  {
    id: 'disc-certification',
    title: 'Everything DiSC® Behavioral Profiling Certification',
    price: 'KES 20,000',
    duration: '4 Weeks',
    description: 'Become a certified Everything DiSC practitioner. Learn to interpret behavioral profiles, facilitate workshops, and match candidates to corporate culture.',
    curriculum: [
      {
        module: 'Module 1: Foundations of the DiSC Behavioral Model',
        topics: [
          'Understanding Dominance (D), Influence (i), Steadiness (S), and Conscientiousness (C)',
          'History and scientific validity of psychometric assessments',
          'Interpreting personal profiling graphs and data'
        ]
      },
      {
        module: 'Module 2: Administering Assessments & Facilitating Profiles',
        topics: [
          'Navigating the administrator dashboard and setting up profiles',
          'Guiding managers and teams through their results',
          'Using comparison reports to improve peer collaboration'
        ]
      },
      {
        module: 'Module 3: Cultivating Performance and Cultural Fit',
        topics: [
          'Mapping behavioral profiles to specific corporate roles',
          'Designing workspaces that accommodate different personality types',
          'Solving communication barriers using behavioral adaptability'
        ]
      },
      {
        module: 'Module 4: Individual Debrief & Coaching Application',
        topics: [
          'Conducting professional one-on-one coaching sessions using DiSC',
          'Structuring developmental feedback logs',
          'Final certification exam and facilitator registration'
        ]
      }
    ]
  }
];

const Courses: React.FC = () => {
  const [activeCurriculumId, setActiveCurriculumId] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'whatsapp'>('whatsapp');
  
  // Checkout Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mpesaCode, setMpesaCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCurriculum = (courseId: string) => {
    if (activeCurriculumId === courseId) {
      setActiveCurriculumId(null);
    } else {
      setActiveCurriculumId(courseId);
    }
  };

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setCheckoutStep(1);
  };

  const closeCheckout = () => {
    setSelectedCourse(null);
    // Reset state
    setFullName('');
    setEmail('');
    setPhone('');
    setWhatsapp('');
    setMpesaCode('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvc('');
  };

  const buildWhatsappUrl = (course: Course, method: string, extraDetails: string = '') => {
    const phoneNumber = '254714036800'; // Primary Ink Coaching Admin Number
    let text = `Hi Ink Coaching, I would like to enroll in the "${course.title}" program.\n\n`;
    text += `*Student Details:*\n`;
    text += `- Name: ${fullName}\n`;
    text += `- Email: ${email}\n`;
    text += `- Phone: ${phone}\n`;
    text += `- WhatsApp: ${whatsapp || phone}\n\n`;
    text += `*Payment Method:* ${method}\n`;
    if (extraDetails) {
      text += extraDetails;
    }
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setCheckoutStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate small API delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (paymentMethod === 'whatsapp') {
        const url = buildWhatsappUrl(selectedCourse!, 'WhatsApp Direct (Pay on delivery)');
        window.open(url, '_blank');
        setCheckoutStep(3);
      } else {
        setCheckoutStep(3);
      }
    }, 800);
  };

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section style={{ 
        padding: '120px 0 80px', 
        borderBottom: '1px solid #E8E8E8',
        background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 100%)' 
      }}>
        <div className="container">
          <span className="eyebrow" style={{ color: '#D11F5E', fontWeight: 600 }}>Ink Coaching Programs</span>
          <h1 style={{ 
            maxWidth: '850px', 
            marginBottom: '28px',
            fontSize: 'clamp(40px, 6vw, 76px)',
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.04em'
          }}>
            Professional Courses & Curriculum
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#555555', 
            maxWidth: '620px', 
            lineHeight: 1.8 
          }}>
            Invest in premium human capital development. Select from our certified leadership, emotional intelligence, sales, and behavioral profiling courses to accelerate your professional growth.
          </p>
        </div>
      </section>

      {/* ── COURSES LIST SECTION ───────────────────────────── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {COURSES.map(course => {
              const isCurriculumOpen = activeCurriculumId === course.id;
              
              return (
                <div 
                  key={course.id}
                  style={{
                    border: '1px solid #E8E8E8',
                    borderRadius: '12px',
                    padding: '40px',
                    transition: 'all 0.3s ease',
                    boxShadow: isCurriculumOpen ? '0 10px 30px rgba(0,0,0,0.04)' : 'none',
                    background: '#FFFFFF'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '24px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Course Summary */}
                    <div style={{ flex: '1 1 500px' }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '16px', 
                        marginBottom: '16px' 
                      }}>
                        <span style={{ 
                          background: '#F4F4F4', 
                          color: '#333333', 
                          fontSize: '12px', 
                          fontWeight: 600, 
                          padding: '6px 12px',
                          borderRadius: '100px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          {course.duration}
                        </span>
                        <span style={{ 
                          color: '#D11F5E', 
                          fontWeight: 700, 
                          fontSize: '18px',
                          fontFamily: 'var(--font-head)'
                        }}>
                          {course.price}
                        </span>
                      </div>
                      
                      <h2 style={{ 
                        fontSize: 'clamp(24px, 3vw, 32px)', 
                        marginBottom: '16px',
                        fontFamily: 'var(--font-head)',
                        fontWeight: 700 
                      }}>
                        {course.title}
                      </h2>
                      
                      <p style={{ 
                        color: '#666666', 
                        fontSize: '16px', 
                        lineHeight: 1.7, 
                        marginBottom: '28px' 
                      }}>
                        {course.description}
                      </p>

                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <button 
                          onClick={() => handleEnrollClick(course)}
                          className="btn btn-red"
                          style={{ padding: '14px 28px', fontSize: '14px', borderRadius: '6px' }}
                        >
                          Enroll & Pay Now
                        </button>
                        <button 
                          onClick={() => toggleCurriculum(course.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'transparent',
                            border: '1px solid #CCCCCC',
                            padding: '14px 28px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#333333',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = '#000000';
                            e.currentTarget.style.background = '#F9F9F9';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = '#CCCCCC';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {isCurriculumOpen ? 'Hide Curriculum' : 'View Curriculum'}
                          <span style={{
                            fontSize: '10px',
                            transform: isCurriculumOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                          }}>▼</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Curriculum Accordion Body */}
                  {isCurriculumOpen && (
                    <div style={{
                      marginTop: '40px',
                      paddingTop: '40px',
                      borderTop: '1px solid #E8E8E8',
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      <h3 style={{ 
                        fontSize: '18px', 
                        marginBottom: '24px', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em',
                        color: '#111111'
                      }}>
                        Course Curriculum Breakdown
                      </h3>
                      
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '24px' 
                      }}>
                        {course.curriculum.map((item, idx) => (
                          <div 
                            key={idx}
                            style={{
                              background: '#F9F9F9',
                              padding: '24px',
                              borderRadius: '8px',
                              border: '1px solid #E8E8E8'
                            }}
                          >
                            <h4 style={{ 
                              fontSize: '15px', 
                              fontWeight: 700, 
                              marginBottom: '14px',
                              color: '#D11F5E',
                              lineHeight: 1.4
                            }}>
                              {item.module}
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '0' }}>
                              {item.topics.map((topic, tIdx) => (
                                <li 
                                  key={tIdx}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: '#444444',
                                    lineHeight: 1.5
                                  }}
                                >
                                  <span style={{
                                    color: '#D11F5E',
                                    fontSize: '10px',
                                    marginTop: '4px'
                                  }}>•</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHECKOUT MODAL ─────────────────────────────────── */}
      {selectedCourse && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '540px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            position: 'relative',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #E8E8E8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              top: 0,
              background: '#FFFFFF',
              zIndex: 10
            }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#D11F5E', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Enrollment Portal
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px' }}>
                  {selectedCourse.title}
                </h3>
              </div>
              <button 
                onClick={closeCheckout}
                style={{
                  fontSize: '24px',
                  fontWeight: 300,
                  cursor: 'pointer',
                  color: '#999999',
                  transition: 'color 0.2s ease',
                  padding: '4px'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#000000'}
                onMouseLeave={e => e.currentTarget.style.color = '#999999'}
              >
                ✕
              </button>
            </div>

            {/* Stepper Indicator */}
            <div style={{
              display: 'flex',
              background: '#F9F9F9',
              padding: '12px 32px',
              borderBottom: '1px solid #E8E8E8',
              gap: '16px'
            }}>
              {[
                { step: 1, label: 'Student Info' },
                { step: 2, label: 'Payment' },
                { step: 3, label: 'Confirmation' }
              ].map(s => {
                const isActive = checkoutStep === s.step;
                const isCompleted = checkoutStep > s.step;
                return (
                  <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: isActive ? '#D11F5E' : isCompleted ? '#000000' : '#CCCCCC',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {isCompleted ? '✓' : s.step}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#000000' : '#777777'
                    }}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step Content */}
            <div style={{ padding: '32px' }}>
              
              {/* STEP 1: Personal details */}
              {checkoutStep === 1 && (
                <form onSubmit={handleStep1Submit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333333', marginBottom: '8px' }}>
                        Full Name <span style={{ color: '#D11F5E' }}>*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="e.g., John Doe"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #CCCCCC',
                          borderRadius: '6px',
                          fontSize: '15px',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333333', marginBottom: '8px' }}>
                        Email Address <span style={{ color: '#D11F5E' }}>*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #CCCCCC',
                          borderRadius: '6px',
                          fontSize: '15px',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333333', marginBottom: '8px' }}>
                        Phone Number <span style={{ color: '#D11F5E' }}>*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="e.g., +254 712 345 678"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #CCCCCC',
                          borderRadius: '6px',
                          fontSize: '15px',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333333', marginBottom: '8px' }}>
                        WhatsApp Number (Optional)
                      </label>
                      <input 
                        type="tel" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="Leave blank if same as phone"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #CCCCCC',
                          borderRadius: '6px',
                          fontSize: '15px',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-red"
                      style={{ 
                        width: '100%', 
                        padding: '14px', 
                        borderRadius: '6px', 
                        fontSize: '15px',
                        marginTop: '10px'
                      }}
                    >
                      Proceed to Payment Selection
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: Payment choice */}
              {checkoutStep === 2 && (
                <form onSubmit={handleStep2Submit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ fontSize: '14px', color: '#666666' }}>
                      Selected: <strong>{selectedCourse.title}</strong> ({selectedCourse.price})
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333333', marginBottom: '12px' }}>
                        Select Payment Method
                      </label>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {/* WhatsApp Direct Option */}
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          border: '1px solid',
                          borderColor: paymentMethod === 'whatsapp' ? '#47C756' : '#CCCCCC',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: paymentMethod === 'whatsapp' ? '#F4FCF5' : '#FFFFFF',
                          transition: 'all 0.2s ease'
                        }}>
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === 'whatsapp'} 
                            onChange={() => setPaymentMethod('whatsapp')}
                            style={{ accentColor: '#47C756' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '14px', color: '#1E4622' }}>
                              Register & Complete via WhatsApp (Recommended)
                            </div>
                            <div style={{ fontSize: '12px', color: '#555555', marginTop: '2px' }}>
                              Instant redirection. Share information and complete registration directly with our team.
                            </div>
                          </div>
                        </label>

                        {/* M-Pesa Option */}
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          border: '1px solid',
                          borderColor: paymentMethod === 'mpesa' ? '#D11F5E' : '#CCCCCC',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: paymentMethod === 'mpesa' ? '#FDF5F7' : '#FFFFFF',
                          transition: 'all 0.2s ease'
                        }}>
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === 'mpesa'} 
                            onChange={() => setPaymentMethod('mpesa')}
                            style={{ accentColor: '#D11F5E' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '14px' }}>
                              Lipa na M-Pesa
                            </div>
                            <div style={{ fontSize: '12px', color: '#666666', marginTop: '2px' }}>
                              Pay directly to our Till Number and enter the Transaction Code below.
                            </div>
                          </div>
                        </label>

                        {/* Credit Card Option */}
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          border: '1px solid',
                          borderColor: paymentMethod === 'card' ? '#D11F5E' : '#CCCCCC',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: paymentMethod === 'card' ? '#FDF5F7' : '#FFFFFF',
                          transition: 'all 0.2s ease'
                        }}>
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === 'card'} 
                            onChange={() => setPaymentMethod('card')}
                            style={{ accentColor: '#D11F5E' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '14px' }}>
                              Credit / Debit Card
                            </div>
                            <div style={{ fontSize: '12px', color: '#666666', marginTop: '2px' }}>
                              Secure payment processing using Visa, Mastercard, or American Express.
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* M-PESA DETAIL INPUT */}
                    {paymentMethod === 'mpesa' && (
                      <div style={{
                        background: '#F9F9F9',
                        border: '1px solid #E8E8E8',
                        padding: '20px',
                        borderRadius: '8px',
                        animation: 'fadeIn 0.2s ease'
                      }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>
                          M-Pesa Instructions
                        </h4>
                        <ol style={{ fontSize: '13px', color: '#555555', paddingLeft: '16px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <li>Go to your M-Pesa menu or App</li>
                          <li>Select <strong>Lipa na M-Pesa</strong> then <strong>Buy Goods & Services</strong></li>
                          <li>Enter Till Number: <strong>5140368</strong></li>
                          <li>Enter Amount: <strong>{selectedCourse.price}</strong></li>
                          <li>Enter your M-Pesa PIN and complete payment</li>
                        </ol>
                        
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333333', marginBottom: '6px' }}>
                            M-Pesa Transaction Code <span style={{ color: '#D11F5E' }}>*</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            placeholder="e.g., SKL8XYZ123"
                            value={mpesaCode}
                            onChange={e => setMpesaCode(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '10px',
                              border: '1px solid #CCCCCC',
                              borderRadius: '4px',
                              fontSize: '14px',
                              textTransform: 'uppercase'
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* CARD DETAIL INPUT */}
                    {paymentMethod === 'card' && (
                      <div style={{
                        background: '#F9F9F9',
                        border: '1px solid #E8E8E8',
                        padding: '20px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        animation: 'fadeIn 0.2s ease'
                      }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333333', marginBottom: '6px' }}>
                            Card Number <span style={{ color: '#D11F5E' }}>*</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            placeholder="•••• •••• •••• ••••"
                            maxLength={19}
                            value={cardNumber}
                            onChange={e => {
                              // basic format spacing
                              const val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                              const matches = val.match(/\d{4,16}/g);
                              const match = (matches && matches[0]) || '';
                              const parts = [];
                              for (let i = 0, len = match.length; i < len; i += 4) {
                                parts.push(match.substring(i, i + 4));
                              }
                              if (parts.length > 0) {
                                setCardNumber(parts.join(' '));
                              } else {
                                setCardNumber(val);
                              }
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              border: '1px solid #CCCCCC',
                              borderRadius: '4px',
                              fontSize: '14px'
                            }}
                          />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333333', marginBottom: '6px' }}>
                              Expiry Date <span style={{ color: '#D11F5E' }}>*</span>
                            </label>
                            <input 
                              type="text" 
                              required
                              placeholder="MM/YY"
                              maxLength={5}
                              value={cardExpiry}
                              onChange={e => {
                                const val = e.target.value.replace(/\D/g, '');
                                if (val.length >= 2) {
                                  setCardExpiry(val.substring(0, 2) + '/' + val.substring(2, 4));
                                } else {
                                  setCardExpiry(val);
                                }
                              }}
                              style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #CCCCCC',
                                borderRadius: '4px',
                                fontSize: '14px'
                              }}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333333', marginBottom: '6px' }}>
                              CVC / CVV <span style={{ color: '#D11F5E' }}>*</span>
                            </label>
                            <input 
                              type="password" 
                              required
                              placeholder="•••"
                              maxLength={3}
                              value={cardCvc}
                              onChange={e => setCardCvc(e.target.value.replace(/\D/g, ''))}
                              style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #CCCCCC',
                                borderRadius: '4px',
                                fontSize: '14px'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
                      <button 
                        type="button"
                        onClick={() => setCheckoutStep(1)}
                        style={{
                          flex: 1,
                          padding: '14px',
                          background: '#FFFFFF',
                          border: '1px solid #CCCCCC',
                          color: '#333333',
                          fontSize: '15px',
                          fontWeight: 600,
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          flex: 2,
                          padding: '14px',
                          background: paymentMethod === 'whatsapp' ? '#47C756' : '#D11F5E',
                          color: '#FFFFFF',
                          fontSize: '15px',
                          fontWeight: 600,
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        {isSubmitting ? (
                          'Processing...'
                        ) : paymentMethod === 'whatsapp' ? (
                          <>
                            <span>Open WhatsApp & Submit</span>
                          </>
                        ) : (
                          'Complete Payment'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* STEP 3: Success Screen */}
              {checkoutStep === 3 && (
                <div style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '10px 0'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#E8FBF0',
                    color: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                      Enrollment Request Initiated!
                    </h3>
                    <p style={{ fontSize: '15px', color: '#666666', lineHeight: 1.6 }}>
                      Thank you for choosing Ink Coaching. Your details for <strong>{selectedCourse.title}</strong> have been received.
                    </p>
                  </div>

                  {paymentMethod !== 'whatsapp' ? (
                    <div style={{
                      background: '#F9F9F9',
                      border: '1px solid #E8E8E8',
                      padding: '16px',
                      borderRadius: '8px',
                      width: '100%',
                      fontSize: '14px',
                      color: '#444444',
                      textAlign: 'left'
                    }}>
                      <div style={{ marginBottom: '6px' }}><strong>Payment Method:</strong> {paymentMethod === 'mpesa' ? 'Lipa na M-Pesa' : 'Credit/Debit Card'}</div>
                      {paymentMethod === 'mpesa' && <div><strong>Transaction Code:</strong> {mpesaCode.toUpperCase()}</div>}
                      <div style={{ marginTop: '10px', fontSize: '12px', color: '#777777' }}>
                        *Our finance team will verify the payment and email your curriculum and calendar links shortly.
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: '14px', color: '#777777' }}>
                      An automated chat tab was launched to transmit your details directly.
                    </p>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '10px' }}>
                    <a 
                      href={buildWhatsappUrl(
                        selectedCourse, 
                        paymentMethod === 'mpesa' ? `Lipa na M-Pesa (${mpesaCode.toUpperCase()})` : paymentMethod === 'card' ? 'Visa/Mastercard Credit Card' : 'WhatsApp Direct',
                        paymentMethod === 'mpesa' ? `*M-Pesa Code:* ${mpesaCode.toUpperCase()}\n` : ''
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#25D366',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '14px',
                        padding: '14px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      Notify Coordinator on WhatsApp
                    </a>

                    <button 
                      onClick={closeCheckout}
                      style={{
                        padding: '12px',
                        background: '#FFFFFF',
                        border: '1px solid #CCCCCC',
                        color: '#333333',
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Accordion Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

    </div>
  );
};

export default Courses;
