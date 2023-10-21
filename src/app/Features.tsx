"use client"

import { ReactNode } from 'react';
import { FiActivity, FiHeart, FiMap } from 'react-icons/fi';
import { CiDumbbell } from 'react-icons/ci'
import { motion } from 'framer-motion';

type FeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresData: FeatureProps[] = [
    {
      icon: <FiActivity style={{color: 'green', fontSize: '50px'}}/>,
      title: 'Track Your Progress',
      description: 'Keep track of your workouts and monitor your progress over time.',
    },
    {
      icon: <CiDumbbell style={{color: 'gray', fontSize: '50px'}} />,
      title: 'Wide Range of Exercises',
      description: 'Access a wide range of exercises and workout routines to achieve your fitness goals.',
    },
    {
      icon: <FiHeart style={{color: 'red', fontSize: '50px'}} />,
      title: 'Heart Rate Monitoring',
      description: 'Monitor your heart rate during workouts to optimize your training intensity.',
    },
    {
      icon: <FiMap style={{color: 'skyblue', fontSize: '50px'}} />,
      title: 'Outdoor Activities',
      description: 'Discover outdoor workout spots nearby and explore South Africa while staying fit.',
    },
  ];

  return (
    <div className="py-16" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-md p-6">
              <Feature {...feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;