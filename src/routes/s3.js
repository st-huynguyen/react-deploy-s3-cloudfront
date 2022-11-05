import React from 'react';
import { Link } from 'react-router-dom';
import s3icon from '../assets/s3.png';

const S3 = () => {
  return (
    <div className="page">
      <img src={s3icon} alt="S3" />
      <h2>What is AWS S3?</h2>
      <p>
        Amazon S3 is an object storage service that stores data as objects
        within buckets. An object is a file and any metadata that describes the
        file.
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default S3;
