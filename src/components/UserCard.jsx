import React from 'react';
import UserIcon from '../images/UserIcon';
import Mountains from '../images/Mountains.jpeg';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function UserCard({ chosenUser, handleDeletion, fulldetail }) {
    const {id} = useParams();

    return (
        <div className={`w-full p-4 md:m-1`}>
            {chosenUser &&
                <motion.div
                    layoutId={chosenUser.id}
                    whileHover={{ scale: fulldetail ? 1 : 1.1 }}
                    className={`rounded-lg shadow-lg bg-gray-600 ${fulldetail ? 'max-w-4xl' : 'md:max-w-lg'} flex flex-row flex-wrap p-3 antialiased`}
                    style={{
                        backgroundImage: `url(${Mountains})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'multiply'
                    }}
                >
                    <Link to={`/users/${chosenUser.id}`} className="md:w-1/3 w-full">
                        <UserIcon className="text-gray-400" />
                    </Link>
                    <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                        <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                            <Link to={`/users/${chosenUser.id}`}>
                                <div className="text-2xl text-white leading-tight">{`${chosenUser.firstName} ${chosenUser.lastName}`}</div>
                            </Link>
                            {chosenUser && !id &&
                                <Link to={`/user-edit/${chosenUser.id}`} className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">Edit user</Link>
                            }
                            {fulldetail && 
                                <React.Fragment>
                                    <a href={`mailto:${chosenUser.email}`} className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{chosenUser.email}</span></a><br />
                                    <a href={`tel:${chosenUser.phone}`} className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{chosenUser.phone}</span></a>
                                </React.Fragment>
                            }
                            {chosenUser && !id &&
                                <React.Fragment>
                                    <button value={chosenUser.id} className="text-sm text-red-600 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0 font-bold pl-4" onClick={handleDeletion}>
                                        Delete User
                                    </button>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </motion.div>
            }
        </div>
    );
}
