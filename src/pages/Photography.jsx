import React, { useState } from "react";
import {
  Camera,
  Heart,
  Eye,
  Download,
  MapPin,
  Settings,
  Calendar,
} from "lucide-react";
import ScrollableCards from "../Components/ScrollableCards";
import opera from "../assets/operahouse.jpg";
import skyscraper from "../assets/skyscrapers.jpg";
import dayout from "../assets/dayout.jpg";
import tram from "../assets/tram.jpg";
import roadtothesunset from "../assets/roadtothesunset.jpg";
import beach from "../assets/beach.jpg";
import basketball from "../assets/basketball.jpg";
import unswlawn from "../assets/unswlawn.jpg";
import hibiscus from "../assets/hibiscus.jpg";
import dogwalking from "../assets/dogwalking.jpg";
import threesisters from "../assets/threesisters.jpg";
import train from "../assets/train.jpg";
import fountain from "../assets/fountain.jpg";
import waterfalls from "../assets/waterfalls.jpg";
import king from "../assets/King.jpg";

const Photography = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const photos = [
    {
      id: 1,
      title: "Harbor Icons",
      alt: "Opera House",
      url: opera,
      category: "Landscape",
      location: "Sydney, Australia",
      camera: "Canon EOS 200D",
      lens: "18-55mm f/4-5.6",
      description:
        "Captured The Opera House with ferries cutting through the frame, showcasing Sydney's iconic harbor life.",
    },
    {
      id: 2,
      title: "Urban Convergence",
      alt: "Urban Landscape",
      url: skyscraper,
      category: "Urban Photography",
      location: "Sydney, Australia",
      camera: "Canon EOS 200D",
      lens: "18-55mm f/4-5.6",
      description:
        "Sydney's CBD skyline with Circular Quay in the foreground, highlighting the blend of modern architecture and bustling city life.",
    },
    {
      id: 3,
      title: "Waterside Dining",
      alt: "Waterside Dining",
      url: dayout,
      category: "Food & Lifestyle",
      location: "Kirribilli, Sydney",
      camera: "Google Pixel 6",
      lens: "Wide Angle",
      description:
        "A cozy meal at a Kirribilli restaurant with stunning views, capturing the essence of waterfront dining.",
    },
    {
      id: 4,
      title: "City Pulse",
      alt: "Light rail trams on George Street with historic architecture",
      url: tram,
      category: "Street Photography",
      location: "Wynyard, Sydney",
      camera: "Canon EOS 200D",
      lens: "18-55mm f/4-5.6",
      description:
        "The bustling energy of Sydney's light rail trams, framed by historic architecture, showcasing the city's vibrant urban life.",
    },
    {
      id: 5,
      title: "The King on the Field",
      alt: " Virat Kohli fielding at the SCG",
      url: king,
      category: "Sports",
      location: "SCG, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Capturing Virat Kohli in action at the SCG, showcasing his athleticism and focus on the cricket field. Unfortunately for the fans this was his last day on Australian soil as a Test cricketer.",
    },
    {
      id: 6,
      title: "Highway to the City",
      alt: "Road leading toward Sydney's distant skyline at golden hour",
      url: roadtothesunset,
      category: "Landscape",
      location: "Sydney Outskirts",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description: "A scenic road at golden hour.",
    },
    {
      id: 7,
      title: "Coastal Serenity",
      alt: "Beach",
      url: beach,
      category: "Nature",
      location: "Port Stephens, NSW",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "The peaceful coastline of Port Stephens, capturing the tranquil beauty of Australia's eastern shores.",
    },
    {
      id: 8,
      title: "University Hoops",
      alt: "playing basketball",
      url: basketball,
      category: "Sports",
      location: "UNSW Campus, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Documenting the simple yet profound beauty of university basketball games.",
    },
    {
      id: 9,
      title: "Tree-Lined Perspective",
      alt: "Tree-lined street",
      url: unswlawn,
      category: "Nature",
      location: "UNSW Campus, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Documenting the simple yet profound beauty of tree-lined streets.",
    },
    {
      id: 10,
      title: "Garden Bloom",
      alt: "Blooming flowers in a garden",
      url: hibiscus,
      category: "Nature",
      location: "UNSW Campus, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Capturing the vibrant colors and delicate details of blooming hibiscus flower.",
    },
    {
      id: 11,
      title: "Morning Walk",
      alt: "Person with dog on a quiet suburban street",
      url: dogwalking,
      category: "Street Photography",
      location: "Hillsdale, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "A peaceful evening walk in a quiet suburban neighborhood, highlighting the simple joys of companionship and nature.",
    },
    {
      id: 12,
      title: "Three Sisters",
      alt: "Three rock formations",
      url: threesisters,
      category: "Nature",
      location: "Blue Mountains, NSW",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Beholding the majestic beauty of the Three Sisters rock formations.",
    },
    {
      id: 13,
      title: "Lidcome Line",
      alt: "Train passing through Lidcombe",
      url: train,
      category: "Street Photography",
      location: "Redfern, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Capturing the dynamic motion of a train passing towards Lidcombe station, showcasing urban transit in action.",
    },
    {
      id: 14,
      title: "Hyde Park Fountain",
      alt: "Fountain in Hyde Park",
      url: fountain,
      category: "Urban Photography",
      location: "Hyde Park, Sydney",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Documenting the simple yet profound beauty of university basketball games.",
    },
    {
      id: 15,
      title: "Misty Falls",
      alt: "Misty waterfall",
      url: waterfalls,
      category: "Nature",
      location: "Jog Falls, Karnataka",
      camera: "Canon EOS 200D",
      lens: "55-250mm f/4-5.6",
      description:
        "Capturing the ethereal beauty of misty waterfalls in the lush landscapes of Karnataka.",
    },
  ];

  const categories = [
    "All",
    "Landscape",
    "Urban Photography",
    "Street",
    "Nature",
    "Sports",
    "Food & Lifestyle",
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const cameraGear = [
    { item: "Canon EOS 200D", type: "Primary Camera", icon: "📷" },
    { item: "55-250mm f/4-5.6", type: "Main Lens", icon: "🔍" },
    { item: "18-55mm f/4-5.6", type: "Secondary Lens", icon: "🔍" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <Camera className="w-10 h-10 text-blue-600" />
            Photography
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When I'm not coding, I love capturing the diverse beauty of India
            through my lens. Photography teaches me to see the world differently
            and appreciate the beauty in everyday moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Photo Gallery - Scrollable Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Gallery
          </h2>
          <div className="block sm:hidden">
            <ScrollableCards
              items={filteredPhotos}
              current={currentPhoto}
              setCurrent={setCurrentPhoto}
              itemsPerView={1}
              renderCard={(photo) => (
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => openImageViewer(photo)}
                          className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
                        >
                          <a
                            href={photo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="w-5 h-5 text-gray-700" />
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                        {photo.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {photo.location.split(",")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {photo.description}
                    </p>

                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {photo.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {photo.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>📷 {photo.camera}</span>
                        <span>🔍 {photo.lens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center gap-1">
                          <Settings className="w-3 h-3" />
                          {photo.settings}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="hidden lg:block">
            <ScrollableCards
              items={filteredPhotos}
              current={currentPhoto}
              setCurrent={setCurrentPhoto}
              itemsPerView={3}
              renderCard={(photo) => (
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                        <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                          <a
                            href={photo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="w-5 h-5 text-gray-700" />
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                        {photo.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {photo.location.split(",")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {photo.description}
                    </p>

                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {photo.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>📷 {photo.camera}</span>
                        <span>🔍 {photo.lens}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Photography Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Photo Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.slice(0, 8).map((photo) => (
              <div key={photo.id} className="relative group cursor-pointer">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white font-bold text-sm text-center">
                      {photo.title}
                    </h3>
                    <p className="text-white text-xs text-center mt-1">
                      {photo.location.split(",")[0]}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Camera Gear Section */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            My Camera Gear
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cameraGear.map((gear, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border flex items-center gap-4"
              >
                <span className="text-2xl">{gear.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{gear.item}</h3>
                  <p className="text-gray-600 text-sm">{gear.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photography Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            My Photography Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Authentic Moments
              </h3>
              <p className="text-gray-600 text-sm">
                I believe in capturing genuine emotions and authentic moments.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Emotional Connection
              </h3>
              <p className="text-gray-600 text-sm">
                Great photography creates an emotional bridge between the viewer
                and the subject, allowing stories, feelings, and experiences to
                be shared without the need for words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
