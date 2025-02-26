import Image from "next/image"

interface CharacterInfo {
  name: string
  age: number
  favoriteActivities: string
  favoriteAnimal: string
  favoriteColor: string
  pet: string
  magicalElement: string
  specialSkill: string
  imageUrl: string
}

export function CharacterCard({ info }: { info: CharacterInfo }) {
  return (
    <div className="relative pt-16">
      {/* Avatar image positioned above card */}
      <div className="absolute -top-4 right-8 w-36 h-36 z-10">
        <Image
          src={info.imageUrl || "/charlie-avatar.png"}
          alt={`Avatar of ${info.name}`}
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Info card */}
      <div className="backdrop-blur-md bg-orange-50/70 rounded-xl p-8">
        {/* Header section */}
        <div className="mb-8 pr-40">
          {" "}
          {/* Space for image */}
          <h3 className="text-3xl font-bold text-gray-900">{info.name}</h3>
          <p className="text-xl text-gray-600">Age: {info.age}</p>
        </div>

        {/* Details section - full width */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Favorite Activities:</p>
            <p>{info.favoriteActivities}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Favorite Animal:</p>
              <p>{info.favoriteAnimal}</p>
            </div>
            <div>
              <p className="text-gray-600">Favorite Color:</p>
              <p>{info.favoriteColor}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600">Pet:</p>
            <p>{info.pet}</p>
          </div>
          <div>
            <p className="text-gray-600">Magical Element:</p>
            <p>{info.magicalElement}</p>
          </div>
          <div>
            <p className="text-gray-600">Special Skill or Dream:</p>
            <p>{info.specialSkill}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

