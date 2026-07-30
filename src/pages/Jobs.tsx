import React, { useState } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  description: string;
  requirements: string[];
  trainingRequired: string;
}

const jobsData: Job[] = [
  {
    id: '1', title: 'Management Trainee', company: 'Human Asset Consultants Ltd',
    location: 'Nairobi, Kenya', type: 'Full-time', category: 'Leadership',
    salary: 'KES 60,000 – 80,000 per month',
    description: 'Join a leadership accelerator program rotating across multiple departments to gain hands-on general management experience within a structured corporate environment.',
    requirements: ['Bachelor degree in Business Administration, Economics, or related field', 'Strong interpersonal and communication skills', 'Desire to take on supervisory responsibilities'],
    trainingRequired: 'Corporate Leadership and Readiness Bootcamp (2 Weeks)',
  },
  {
    id: '2', title: 'Financial Analyst', company: 'Equity Bank Limited',
    location: 'Mombasa, Kenya', type: 'Full-time', category: 'Finance',
    salary: 'KES 90,000 – 120,000 per month',
    description: 'Analyse financial data, construct projection models, and prepare detailed reports to support senior management in strategic decision-making processes.',
    requirements: ['CPA-K or CFA candidate', 'Advanced Excel modelling skills', 'Minimum one year of financial sector experience'],
    trainingRequired: 'Everything DiSC Psychometric Assessment',
  },
  {
    id: '3', title: 'Customer Success Representative', company: 'Boma Project Agency',
    location: 'Nanyuki, Kenya', type: 'Full-time', category: 'Customer Service',
    salary: 'KES 45,000 – 55,000 per month',
    description: 'Support local community merchants, manage grant distribution follow-ups, and resolve platform client inquiries using digital field tracking tools.',
    requirements: ['Diploma or Bachelor degree in Communication or Social Work', 'Fluent in Swahili and English', 'Comfortable with digital tracking tools and tablets'],
    trainingRequired: 'Emotional Intelligence and Conflict Management (1 Week)',
  },
  {
    id: '4', title: 'Associate Sales Executive', company: 'Signature Brands Group',
    location: 'Nairobi, Kenya', type: 'Commission plus Base',
    category: 'Sales', salary: 'KES 35,000 base plus commission',
    description: 'Drive enterprise sales for corporate leadership and training packages. An ambitious role for candidates with a proven record of exceeding outbound sales targets.',
    requirements: ['Track record of meeting direct sales targets', 'Strong negotiation and objection-handling skills', 'Excellent presentation and stakeholder management abilities'],
    trainingRequired: 'Sales and Customer Success Excellence Program (2 Weeks)',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1px solid #E4E4E0', outline: 'none',
  fontFamily: 'var(--font-body)', fontSize: '14px',
  background: '#FAFAFA', color: '#0D1209',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-head)',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--text-muted)',
  marginBottom: '6px',
};

const Jobs: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');
  const [selected, setSelected] = useState<Job | null>(null);
  const [applying, setApplying] = useState(false);
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', agreed: true });
  const [submitted, setSubmitted] = useState(false);

  const filtered = jobsData.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    const matchCat  = category === 'All' || j.category === category;
    const matchType = type === 'All' || j.type === type;
    return matchSearch && matchCat && matchType;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); setApplying(false); setSelected(null);
      setAppForm({ name: '', email: '', phone: '', agreed: true });
    }, 2500);
  };

  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container">
          <span className="eyebrow">Open Placements</span>
          <h1 style={{ marginBottom: '16px' }}>Find Your Placement</h1>
          <p style={{ fontSize: '16px', maxWidth: '520px' }}>
            Browse active roles aligned with Ink Coaching training tracks. Every position includes a certified pre-placement preparation program.
          </p>
        </div>
      </section>

      {/* ── FILTERS ─────────────────────────────────────────── */}
      <div style={{ background: '#F7F7F5', borderBottom: '1px solid #E4E4E0' }}>
        <div className="container" style={{ padding: '24px 40px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <label style={labelStyle}>Search Positions</label>
            <input type="text" placeholder="Role title or company..." value={search} onChange={e => setSearch(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ minWidth: '180px' }}>
            <label style={labelStyle}>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
              {['All', 'Leadership', 'Finance', 'Customer Service', 'Sales'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div style={{ minWidth: '180px' }}>
            <label style={labelStyle}>Job Type</label>
            <select value={type} onChange={e => setType(e.target.value)} style={inputStyle}>
              {['All', 'Full-time', 'Commission plus Base'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ── JOBS LAYOUT ─────────────────────────────────────── */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container jobs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', paddingTop: '48px' }}>

          {/* Job list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid #E4E4E0' }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '60px 0', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '8px' }}>No matching placements found</h3>
                <p>Try broadening your filters or search terms.</p>
              </div>
            ) : filtered.map(job => (
              <div
                key={job.id}
                onClick={() => { setSelected(job); setApplying(false); }}
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid #E4E4E0',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '30px',
                  alignItems: 'center',
                  cursor: 'none',
                  borderLeft: selected?.id === job.id ? '3px solid #D11F5E' : '3px solid transparent',
                  paddingLeft: '20px',
                  transition: 'all 0.15s ease',
                }}
                className="job-list-row"
              >
                <div>
                  <h3 style={{ fontSize: '19px', marginBottom: '6px' }}>{job.title}</h3>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <span>{job.company}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <span className="badge badge-grey">{job.trainingRequired}</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(job); setApplying(true); }}
                  className="btn btn-red btn-sm"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          {selected && (
            <>
              <div className="job-overlay" onClick={() => setSelected(null)}></div>
              <div className="job-detail-panel" style={{ border: '1px solid #E4E4E0', background: '#FFFFFF', position: 'relative' }}>
                <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '18px', color: 'var(--text-muted)' }}>
                X
              </button>

              {!applying ? (
                <div style={{ padding: '40px' }}>
                  <span className="badge badge-grey" style={{ marginBottom: '16px', display: 'inline-flex' }}>{selected.category}</span>
                  <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>{selected.title}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>{selected.company}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
                    <span className="tag">{selected.location}</span>
                    <span className="tag">{selected.type}</span>
                    <span className="tag">{selected.salary}</span>
                  </div>

                  <div className="divider" style={{ marginBottom: '28px' }} />

                  <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-head)', color: 'var(--text-muted)', marginBottom: '12px' }}>Role Description</h4>
                  <p style={{ fontSize: '15px', marginBottom: '28px' }}>{selected.description}</p>

                  <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-head)', color: 'var(--text-muted)', marginBottom: '12px' }}>Candidate Specifications</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {selected.requirements.map((r, i) => (
                      <li key={i} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: '10px', fontSize: '14px' }}>
                        <span style={{ width: '5px', height: '5px', background: '#D11F5E', borderRadius: '50%', marginTop: '9px', flexShrink: 0 }} />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div style={{ background: '#F7F7F5', padding: '24px', borderLeft: '3px solid #D11F5E', marginBottom: '28px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#0D1209', marginBottom: '4px', fontFamily: 'var(--font-head)' }}>
                      Required Ink Coaching Certification
                    </p>
                    <p style={{ fontSize: '14px', margin: 0 }}>{selected.trainingRequired}</p>
                  </div>

                  <button onClick={() => setApplying(true)} className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>
                    Apply for This Placement
                  </button>
                </div>
              ) : (
                <div style={{ padding: '40px' }}>
                  <h3 style={{ marginBottom: '6px' }}>Apply: {selected.title}</h3>
                  <p style={{ fontSize: '14px', marginBottom: '28px' }}>at {selected.company}</p>
                  <div className="divider" style={{ marginBottom: '28px' }} />

                  {submitted ? (
                    <div style={{ padding: '40px 0', textAlign: 'center' }}>
                      <h3 style={{ marginBottom: '10px', color: '#0D1209' }}>Application Received</h3>
                      <p style={{ fontSize: '14px' }}>Our vetting team will review your profile and follow up shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <label style={labelStyle}>Full Name</label>
                        <input type="text" required placeholder="Jane Doe" value={appForm.name} onChange={e => setAppForm({...appForm, name: e.target.value})} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address</label>
                        <input type="email" required placeholder="jane@example.com" value={appForm.email} onChange={e => setAppForm({...appForm, email: e.target.value})} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input type="tel" required placeholder="+254 7..." value={appForm.phone} onChange={e => setAppForm({...appForm, phone: e.target.value})} style={inputStyle} />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '10px', alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid #E4E4E0', marginTop: '4px' }}>
                        <input type="checkbox" required checked={appForm.agreed} onChange={e => setAppForm({...appForm, agreed: e.target.checked})} style={{ marginTop: '2px' }} />
                        <label style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          I agree to complete the required <strong>{selected.trainingRequired}</strong> certification program if my screening is successful.
                        </label>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', marginTop: '8px' }}>
                        <button type="button" onClick={() => setApplying(false)} className="btn btn-outline" style={{ justifyContent: 'center', clipPath: 'none', padding: '13px 16px' }}>Back</button>
                        <button type="submit" className="btn btn-red" style={{ justifyContent: 'center' }}>Submit Application</button>
                      </div>
                    </form>
                  )}
                </div>
              )}
              </div>
            </>
          )}

        </div>
      </section>

      <style>{`
        @media (min-width: 960px) {
          .jobs-grid { grid-template-columns: ${selected ? '1.1fr 0.9fr' : '1fr'} !important; }
          .job-overlay { display: none !important; }
        }
        @media (max-width: 960px) {
          .job-detail-panel {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 82vh !important;
            z-index: 1050 !important;
            border-radius: 20px 20px 0 0 !important;
            box-shadow: 0 -12px 40px rgba(0,0,0,0.15) !important;
            overflow-y: auto !important;
            border: none !important;
            animation: bottomSheetSlide 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }
          .job-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: rgba(0, 0, 0, 0.4) !important;
            z-index: 1040 !important;
            backdrop-filter: blur(4px);
            animation: overlayFade 0.3s ease both;
          }
        }
        @keyframes bottomSheetSlide {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes overlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .job-list-row:hover { background: #FAFAFA; }
      `}</style>
    </div>
  );
};

export default Jobs;
