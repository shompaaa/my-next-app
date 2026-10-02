import Image from 'next/image';
import profile from '../../assets/profile.jpg'


export const metadata = {
  title: 'About',
  description: '...',
}

const AboutPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            <Image src='/profile.jpg' alt='profile' height={300} width={500}></Image>
            <Image src={profile} alt='profile' height={500} width={500}></Image>
            <Image src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05' alt='nature' height={500} width={500}></Image>
        </div>
    );
};

export default AboutPage;