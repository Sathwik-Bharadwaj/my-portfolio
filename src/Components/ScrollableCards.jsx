import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScrollableCards = ({
  items,
  current,
  setCurrent,
  renderCard,
  itemsPerView = 1,
}) => (
  <div className="relative">
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 px-2 ${
              itemsPerView === 1 ? "w-full" : "w-1/3"
            }`}
          >
            {renderCard(item, index)}
          </div>
        ))}
      </div>
    </div>
    {items.length > itemsPerView && (
      <>
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50"
          disabled={current === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() =>
            setCurrent(Math.min(items.length - itemsPerView, current + 1))
          }
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50"
          disabled={current >= items.length - itemsPerView}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </>
    )}
  </div>
);

export default ScrollableCards;
