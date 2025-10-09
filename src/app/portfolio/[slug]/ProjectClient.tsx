"use client";

import { useState } from "react";
import Image from "next/image";
import CustomMarkdown from "@/components/CustomMarkdown";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Project = {
    title: string;
    category: string;
    description: string;
    gallery: string[];
    content: string;
};

type Props = {
    project: Project;
};

export default function ProjectClient({ project }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + project.gallery.length) % project.gallery.length
        );
    };

    return (
        <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 pb-32 space-y-16">
            {/* Header */}
            <div className="space-y-3">
                <p className="px-3 py-1.5 rounded-full text-primary border-2 border-primary w-fit tracking-tight text-sm uppercase">
                    {project.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-semibold text-black">{project.title}</h1>
                <p className="text-zinc-600 max-w-2xl">{project.description}</p>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {project.gallery.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-square rounded-xl overflow-hidden border border-zinc-200"
                        >
                            <Image
                                src={img}
                                alt={`Obrázek ${index + 1}`}
                                fill
                                className="object-cover cursor-pointer"
                                onClick={() => openModal(index)} // Open the modal when clicked
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Markdown content */}
            {project.content && (
                <article className="max-w-3xl">
                    <CustomMarkdown content={project.content} />
                </article>
            )}

            {/* Modal for full-screen image */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal when clicked outside image
                >
                    <div
                        className="relative w-full h-full"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
                    >
                        <button
                            onClick={closeModal}
                            className="absolute z-50 cursor-pointer top-2 right-2 p-1 bg-primary rounded-full text-white text-3xl"
                        >
                            <X/>
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute z-50 left-2 cursor-pointer  top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full"
                        >
                            <ChevronLeft className="text-white" size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute z-50 right-2 cursor-pointer  top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full"
                        >
                            <ChevronRight className="text-white" size={24} />
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={project.gallery[currentImageIndex]}
                                alt={`Full-screen image ${currentImageIndex + 1}`}
                                layout="fill"
                                objectFit="contain"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
