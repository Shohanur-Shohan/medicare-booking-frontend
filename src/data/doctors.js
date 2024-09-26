import doctorImg01 from "/assets/images/doctor-img01.png";
import doctorImg02 from "/assets/images/doctor-img02.png";
import doctorImg03 from "/assets/images/doctor-img03.png";

export const doctors = [
  {
    id: "1",
    name: "Dr. Alfaz Ahmed",
    specialty: "Surgeon",
    avgRating: 4.8,
    totalRating: 22,
    photo: doctorImg01,
    totalPatients: 500,
    hospital: "Mount Adora Hospital, Sylhet.",
    doctorDetails:
      "Dr. Alfaz Ahmed is an experienced surgeon with over 10 years of expertise in complex surgical procedures. He is known for his attention to detail and patient care, performing over 500 successful surgeries. Dr. Ahmed is highly regarded at Mount Adora Hospital in Sylhet.",
    about:
      "Dr. Alfaz Ahmed specializes in general surgery with an emphasis on minimally invasive techniques. His commitment to patient safety and comfort has earned him a reputation as one of the leading surgeons in the region.",
    feedback: [
      {
        patientName: "Rahim Khan",
        comment:
          "Dr. Ahmed was very professional and thorough. He made sure I understood everything about the procedure.",
        rating: 5,
      },
      {
        patientName: "Shamim Akter",
        comment:
          "Very attentive and caring. I felt well taken care of during my surgery.",
        rating: 4.5,
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Saleh Mahmud",
    specialty: "Neurologist",
    avgRating: 4.0,
    totalRating: 272,
    photo: doctorImg02,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
    doctorDetails:
      "Dr. Saleh Mahmud specializes in neurology with extensive experience in treating neurological disorders. He has a wide patient base of over 1,500 patients and a strong reputation at Mount Adora Hospital in Sylhet. Dr. Mahmud is dedicated to advancing neurological care.",
    about:
      "With a focus on both research and patient care, Dr. Saleh Mahmud is committed to understanding and treating a range of neurological conditions. His treatment plans are tailored to individual patient needs.",
    feedback: [
      {
        patientName: "Fatema Begum",
        comment:
          "Dr. Mahmud helped me understand my condition and provided excellent care.",
        rating: 4,
      },
      {
        patientName: "Habib Rahman",
        comment:
          "The doctor was very kind and informative, though the wait time was longer than expected.",
        rating: 3.5,
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Farid Uddin",
    specialty: "Dermatologist",
    avgRating: 4.7,
    totalRating: 72,
    photo: doctorImg03,
    totalPatients: 150,
    hospital: "Mount Adora Hospital, Sylhet.",
    doctorDetails:
      "Dr. Farid Uddin is a skilled dermatologist with years of experience in skin care treatments. He has treated more than 150 patients with a wide range of skin conditions and is well-respected at Mount Adora Hospital in Sylhet for his knowledge and results.",
    about:
      "Dr. Farid Uddin offers a comprehensive range of dermatological services, specializing in treating both common and rare skin conditions. He stays updated on the latest techniques and treatments.",
    feedback: [
      {
        patientName: "Jannat Ara",
        comment:
          "Dr. Farid was very knowledgeable and friendly. My skin condition improved a lot after his treatment.",
        rating: 4.8,
      },
      {
        patientName: "Mohammed Ali",
        comment:
          "Great experience overall. I highly recommend him for any skin-related issues.",
        rating: 5,
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Alfaz Ahmed",
    specialty: "Surgeon",
    avgRating: 4.0,
    totalRating: 72,
    photo: doctorImg01,
    totalPatients: 150,
    hospital: "Mount Adora Hospital, Sylhet.",
    doctorDetails:
      "Dr. Alfaz Ahmed is a prominent surgeon specializing in various surgical techniques. With over 150 successful surgeries, he continues to be a trusted name at Mount Adora Hospital, offering exceptional care to his patients.",
    about:
      "Dr. Alfaz Ahmed is known for his expert surgical skills and dedication to patient recovery. He is an advocate for minimally invasive surgery and patient-centered care.",
    feedback: [
      {
        patientName: "Sara Islam",
        comment:
          "Dr. Ahmed performed my surgery with great precision and care. I recovered quickly and am very happy with the results.",
        rating: 4.5,
      },
      {
        patientName: "Asif Hossain",
        comment: "Very professional and kind. Would definitely recommend.",
        rating: 4,
      },
    ],
  },
];
