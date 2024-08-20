import React, { useState, useEffect } from 'react';
import './accord-125-form.css';

const AccordForm125 = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields with default values
    agencyName: '',
    agencyAddress: '',
    contactName: '',
    phoneNumber: '',
    faxNumber: '',
    email: '',
    naicCode: '',
    underwriterName: '',
    underwriterOffice: '',
    carrier: '',
    companyPolicy: '',
    programCode: '',
    policyNumber: '',
    code: '',
    subcode: '',
    agencyCustomerId: '',
    transactionStatus: '',
    boilerMachineryAmount: '',
    businessAutoAmount: '',
    businessOwnersAmount: '',
    comGeneralLiabilityAmount: '',
    comInlandMarineAmount: '',
    comPropertyAmount: '',
    crimeAmount: '',
    cyberPrivacyAmount: '',
    fiduciaryLiabilityAmount: '',
    garageDealersAmount: '',
    liquorLiabilityAmount: '',
    motorCarrierAmount: '',
    truckersAmount: '',
    umbrellaAmount: '',
    yachtAmount: '',
    proposedEffDate: '',
    proposedExpDate: '',
    billingPlan: [],
    premiumPlan: '',
    paymentMethod: '',
    audit: '',
    deposit: '',
    minimumPremium: '',
    policyPremium: '',
    otherNamesInsured: '',
    mailingAddress: '',
    glCode: '',
    sic: '',
    naics: '',
    fbnSocSec: '',
    businessPhone: '',
    websiteAddress: '',
    entityType: '',
    membersManagers: '',
    // More fields...
  });

  const [premisesCount, setPremisesCount] = useState(0);
  const [premises, setPremises] = useState([]);
  const maxPremises = 4;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePremisesChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newPremises = [...premises];
    newPremises[index] = {
      ...newPremises[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setPremises(newPremises);
  };

  const addPremises = () => {
    if (premisesCount < maxPremises) {
      setPremises([...premises, {}]);
      setPremisesCount(premisesCount + 1);
    } else {
      alert('You can only add up to 4 premises information fieldsets.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    // Additional effect logic can be added here
  }, [formData]);

  return (
    <div className="container">
      <h1>ACORD 125 - General Info Form</h1>
      <form id="acord125-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Agency Information</legend>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="agency-name">Agency Name:</label>
              <input
                type="text"
                id="agency-name"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="agency-address">Address:</label>
              <input
                type="text"
                id="agency-address"
                name="agencyAddress"
                value={formData.agencyAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Contact Name:</label>
              <input
                type="text"
                id="contact-name"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">Phone:</label>
              <input
                type="text"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fax-number">Fax:</label>
              <input
                type="text"
                id="fax-number"
                name="faxNumber"
                value={formData.faxNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="naic-code">NAIC Code:</label>
              <input
                type="text"
                id="naic-code"
                name="naicCode"
                value={formData.naicCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>

        {/* Other fieldsets can be added similarly */}

        <fieldset>
          <legend>Premises Information</legend>
          {premises.map((premise, index) => (
            <div key={index} className="premises-fieldset">
              <fieldset>
                <legend>Premises {index + 1}</legend>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`premises-loc-${index}`}>Location:</label>
                    <input
                      type="text"
                      id={`premises-loc-${index}`}
                      name="location"
                      value={premise.location || ''}
                      onChange={(e) => handlePremisesChange(index, e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`premises-bld-${index}`}>Building:</label>
                    <input
                      type="text"
                      id={`premises-bld-${index}`}
                      name="building"
                      value={premise.building || ''}
                      onChange={(e) => handlePremisesChange(index, e)}
                      required
                    />
                  </div>
                </div>

                {/* Additional fields can be added here similarly */}
              </fieldset>
            </div>
          ))}

          <button type="button" className="add-button" onClick={addPremises}>
            +
          </button>
        </fieldset>

        {/* Other sections and fieldsets can be added similarly */}
        
        <fieldset className="fieldset-container">
          <legend>Signatures</legend>
          <div className="table-container">
            <table>
              <tr>
                <th>Producer's Signature</th>
                <th>Producer's Name (Please Print)</th>
                <th>State Producer License No (Required in Florida)</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="producersSignature"
                    value={formData.producersSignature}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="producersName"
                    value={formData.producersName}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="stateProducerLicenseNo"
                    value={formData.stateProducerLicenseNo}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Applicant's Signature</th>
                <th>Date</th>
                <th>National Producer Number</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="applicantsSignature"
                    value={formData.applicantsSignature}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="nationalProducerNumber"
                    value={formData.nationalProducerNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccordForm125;
