import { useRef, useState } from 'react';
import { motion as Motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xm3k2hu',
        'template_hv4e81a',
        {
          from_name: form.name,
          to_name: 'Juan',
          from_email: form.email,
          to_email: 'jpablo_166@hotmail.com',
          message: form.message,
        },
        '5h36V504YHzc9U8DP',
      )
      .then(
        () => {
          setLoading(false);
          setSended('Thank you. I will get back to you as soon as posible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);

           
          console.error('error', error);

          setSended('Something went wrong');
        },
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <Motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {sended && <p>{sended}</p>}
      </Motion.div>

      <Motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[320px]"
      >
        <EarthCanvas />
      </Motion.div>
    </div>
  );
}

const ContactSection = SectionWrapper(Contact, 'contact');
export default ContactSection;
