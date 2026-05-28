export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: '#f9fafb', padding: '2rem 0' }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Text Section */}
        <div style={{ flex: '1 1 360px' }}>
          <h2 style={{ marginTop: 0 }}>About MediClinic</h2>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>
            At <strong>GhouriSpecialistClinic</strong>, we are dedicated to providing
            patient-focused, high-quality healthcare for individuals and
            families. Led by <strong>Dr. Raza Gulzar Ghouri</strong>, a highly
            experienced <strong>General Medicine Specialist</strong> with
            more than 10 years in practice, our clinic combines compassionate care with
            modern medical technology.
          </p>
          <p className="text-muted">
            Dr. Raza specializes in diagnosing and managing a wide range of
            adult and chronic conditions, preventive health screenings, and
            wellness programs tailored to each patient’s unique needs.
          </p>

          <h3 style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
            Why Choose Us?
          </h3>
          <ul style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>
            <li>Board-certified physicians with diverse specializations</li>
            <li>Comprehensive General Medicine & preventive care</li>
            <li>Modern diagnostics & fully equipped laboratory</li>
            <li>Friendly and supportive staff</li>
            <li>Convenient appointment scheduling</li>
          </ul>
        </div>

        {/* Image Section */}
        <div style={{ flex: '1 1 360px' }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctors team"
            style={{
              width: '100%',
              height: 220,
              objectFit: 'cover',
              borderRadius: 12,
              marginBottom: '1rem',
            }}
          />
          {/* <p
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              textAlign: 'center',
            }}
          >
            Dr. Sarah Thompson (center) with the MediClinic medical team
          </p> */}
        </div>
      </div>
    </section>
  );
}
