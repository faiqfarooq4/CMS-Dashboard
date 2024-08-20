import React, { useState, useEffect } from 'react';
import './accord-25-form-style.css'; // Assuming your CSS is in the same directory

const AccordForm25 = () => {
  const [formData, setFormData] = useState({
    date: '',
    producerName: '',
    producerAddress1: '',
    producerAddress2: '',
    producerCity: '',
    producerState: '',
    producerZip: '',
    producerContact: '',
    producerPhone: '',
    producerFax: '',
    producerEmail: '',
    insuredName: '',
    insuredAddress1: '',
    insuredAddress2: '',
    insuredCity: '',
    insuredState: '',
    insuredZip: '',
    insurerAName: '',
    insurerANaic: '',
    insurerBName: '',
    insurerBNaic: '',
    insurerCName: '',
    insurerCNaic: '',
    insurerDName: '',
    insurerDNaic: '',
    insurerEName: '',
    insurerENaic: '',
    insurerFName: '',
    insurerFNaic: '',
    generalInsrLtr: '',
    generalClaims: '',
    generalAddlInsd: false,
    generalPolicyNumber: '',
    generalPolicyEffDate: '',
    generalPolicyExpDate: '',
    generalEachOccurrence: '',
    generalDamageToRented: '',
    generalMedExp: '',
    generalPersonalInjury: '',
    generalAggregate: '',
    generalProducts: '',
    autoInsrLtr: '',
    autoCoverage: [],
    autoPolicyNumber: '',
    autoPolicyEffDate: '',
    autoPolicyExpDate: '',
    autoEachOccurrence: '',
    autoDamageToRented: '',
    autoMedExp: '',
    autoPersonalInjury: '',
    umbrellaInsrLtr: '',
    umbrellaType: '',
    umbrellaClaims: '',
    umbrellaPolicyNumber: '',
    umbrellaPolicyEffDate: '',
    umbrellaPolicyExpDate: '',
    umbrellaEachOccurrence: '',
    umbrellaAggregate: '',
    workersCompInsrLtr: '',
    workersCompYN: '',
    workersCompPolicyNumber: '',
    workersCompPolicyEffDate: '',
    workersCompPolicyExpDate: '',
    workersCompLimit: '',
    workersCompOtherAmount: '',
    workersCompEachAccident: '',
    workersCompDiseaseEAEmployee: '',
    workersCompDiseasePolicyLimit: '',
    selection: '',
    certificateHolderName: '',
    certificateHolderAddress1: '',
    certificateHolderAddress2: '',
    certificateHolderCity: '',
    certificateHolderState: '',
    certificateHolderZip: '',
    signature: ''
  });

  const [showCertificateHolder, setShowCertificateHolder] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    if (formData.selection === 'coi') {
      setShowCertificateHolder(true);
      setShowSignature(true);
    } else if (formData.selection === 'poi') {
      setShowCertificateHolder(false);
      setShowSignature(true);
    }
  }, [formData.selection]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1>ACORD 25 Fillable Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Date */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="date">Date (MM/DD/YYYY):</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Producer Information */}
        <div className="form-section">
          <fieldset>
            <legend>Producer Information</legend>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="producerName">Producer Name:</label>
                <input
                  type="text"
                  id="producerName"
                  name="producerName"
                  value={formData.producerName}
                  onChange={handleChange}
                />
              </div>
              {/* Other Producer fields */}
              {/* Add other input fields similar to the above */}
            </div>
          </fieldset>
        </div>

        {/* Insured Information */}
        <div className="form-section">
          <fieldset>
            <legend>Insured Information</legend>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="insuredName">Insured Name:</label>
                <input
                  type="text"
                  id="insuredName"
                  name="insuredName"
                  value={formData.insuredName}
                  onChange={handleChange}
                />
              </div>
              {/* Other Insured fields */}
              {/* Add other input fields similar to the above */}
            </div>
          </fieldset>
        </div>

        {/* Similar structure for other sections like Insurer Information, General Liability, etc. */}

        {/* POI/COI Selection */}
        <div className="form-section">
          <fieldset>
            <legend>Selection</legend>
            <div className="form-group">
              <input
                type="radio"
                id="poi"
                name="selection"
                value="poi"
                checked={formData.selection === 'poi'}
                onChange={handleChange}
              />
              <label htmlFor="poi">POI</label>
              <input
                type="radio"
                id="coi"
                name="selection"
                value="coi"
                checked={formData.selection === 'coi'}
                onChange={handleChange}
              />
              <label htmlFor="coi">COI</label>
            </div>
          </fieldset>
        </div>

        {/* Certificate Holder Information */}
        {showCertificateHolder && (
          <div className="form-section" id="certificate-holder-section">
            <fieldset>
              <legend>Certificate Holder Information</legend>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="certificateHolderName">Certificate Holder Name:</label>
                  <input
                    type="text"
                    id="certificateHolderName"
                    name="certificateHolderName"
                    value={formData.certificateHolderName}
                    onChange={handleChange}
                  />
                </div>
                {/* Other Certificate Holder fields */}
                {/* Add other input fields similar to the above */}
              </div>
            </fieldset>
          </div>
        )}

        {/* Signature */}
        {showSignature && (
          <div className="form-section" id="signature-section">
            <fieldset>
              <legend>Authorized Representative</legend>
              <div className="form-group">
                <label htmlFor="signature">Signature:</label>
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        )}

        <div className="form-section">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AccordForm25;
