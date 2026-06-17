import { useState } from 'react';

function MealCard({ meal }) {
  const { name, description, price, rating, time, image, badge } = meal;
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleDelete = () => setQuantity(0);

  const basePrice = parseFloat(price);
  const displayPrice = quantity > 0 ? (basePrice * quantity).toFixed(2) : basePrice.toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <span className="bg-emerald-50 text-emerald-600 font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap">
            ${displayPrice}
          </span>
        </div>

        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        <div className="border-t border-slate-100 mt-4 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-amber-50 text-amber-600 font-semibold px-2.5 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M10 1l2.9 6.26 6.9.6-5.2 4.53 1.6 6.77L10 15.9l-6.2 3.26 1.6-6.77L0.2 7.86l6.9-.6L10 1z" />
              </svg>
              {rating}
            </span>
            <span className="text-slate-500">{time}</span>
          </div>

          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="bg-slate-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-900 rounded-full">
                <button
                  onClick={decrease}
                  aria-label={`Decrease ${name} quantity`}
                  className="w-8 h-8 flex items-center justify-center text-white text-lg font-semibold hover:bg-slate-800 rounded-full transition-colors"
                >
                  −
                </button>
                <span className="w-7 text-center text-white text-sm font-semibold tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={increase}
                  aria-label={`Increase ${name} quantity`}
                  className="w-8 h-8 flex items-center justify-center text-white text-lg font-semibold hover:bg-slate-800 rounded-full transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleDelete}
                aria-label={`Remove ${name} from cart`}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;
