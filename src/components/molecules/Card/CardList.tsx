"use client"
import { MyContext } from '@/contexts/CardInfoContext'
import React, { useContext } from 'react'
import { Card } from './Card'

const CardList = () => {
  const {CardInfo} = useContext(MyContext)
  // console.log(CardInfo)
  return (
    <div>
      <main className="max-w-[1200px] mx-auto my-10">
        <h1 className="ml-8 text-xl my-12">
          Latest <span className="text-green-500">Intern</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] container">
          {CardInfo.map((job) => (
            <div key={job.id} className="card-container">
              <Card className="w-full h-auto" data={job} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CardList