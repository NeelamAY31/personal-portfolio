import React from 'react';
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>

            <div className="p-4">
                <DiHtml5 className="text-7xl text-orange-500" />
            </div>

            <div className="p-4">
                <DiCss3 className="text-7xl text-blue-500" />
            </div>

            <div className="p-4">
                <DiJavascript className="text-7xl text-yellow-500" />
            </div>

            <div className="p-4">
                <DiBootstrap className="text-7xl text-purple-600"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies