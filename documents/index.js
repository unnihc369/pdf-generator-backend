module.exports = ({ name, internshipRole, joiningDate }) => {
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Offer Letter</title>
          <style>
             .offer-letter {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .offer-letter h2 {
             text-align: center;
             margin-bottom: 20px;
             }
             .offer-letter p {
             text-align: justify;
             }
          </style>
       </head>
       <body>
          <div class="offer-letter">
             <h2>Offer Letter</h2>
             <p>Dear <b>${name}</b>,</p>
             <p>We are pleased to offer you the position of <b>${internshipRole}</b> at our company. We were impressed with your qualifications and experience, and we believe that your skills will be valuable to our team.</p>
             <p>You are scheduled to join our company on ${joiningDate}. As a ${internshipRole}, you will be responsible for [mention key responsibilities or tasks of the internship role]. We are confident that you will make a significant contribution to our organization during your tenure.</p>
             <p>This offer is contingent upon the successful completion of any background checks and reference checks that we may require. Please review the attached documents outlining the terms and conditions of your employment.</p>
             <p>If you accept this offer, please sign and return the attached copy of this letter by [date] to confirm your acceptance of the position. We look forward to welcoming you to our team.</p>
             <p>Feel free to contact us if you have any questions or need further clarification regarding this offer.</p>
             <p>Best regards,</p>
             <p>${name}<br />
             ${internshipRole}<br />
             Suvidha Foundation</p>
          </div>
       </body>
    </html>
    `;
};
