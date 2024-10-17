import Input from '../src/assets/components/input/input'
import { Button } from './assets/components/button/button'

function App() {
  function handleClick() {
    console.log("Vous avez cliqué sur le bouton");
  }

  return (
    <div className="min-h-screen bg-graydark flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-graylight p-8 rounded-lg">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-[#E50914] text-4xl font-bold text-center">WlW</h1>
        </div>

        {/* Form Container */}
        <form className="space-y-6">
          {/* Welcome Text */}
          <h2 className="text-white text-2xl font-medium text-center mb-8">
            Le cinéma est un moment de partage quoi de mieux que d'y aller en bonne compagnie
          </h2>

          {/* Input Fields */}
          <div className="space-y-4">
            <Input 
              type="text" 
              placeholder="Entrer votre nom d'utilisateur" 
              value="" 
              onChange={() => null}
              className="w-full bg-[#333] text-white border-none rounded px-5 py-4 focus:ring-2 focus:ring-[#E50914] placeholder-gray-400"
            />
            
            <Input 
              type="password" 
              placeholder="Entrer votre mot de passe" 
              value="" 
              onChange={() => null}
              className="w-full bg-[#333] text-white border-none rounded px-5 py-4 focus:ring-2 focus:ring-[#E50914] placeholder-gray-400"
            />
          </div>

          {/* Remember me and Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2 bg-[#333] border-none focus:ring-[#E50914]" />
              <span>Se souvenir de moi</span>
            </label>
            <a href="#" className="hover:underline">Mot de passe oublié?</a>
          </div>

          {/* Sign In Button */}
          <Button 
            label="Connexion" 
            onClick={handleClick}
            className="w-full bg-[#E50914] text-white py-4 rounded font-medium hover:bg-[#f6121d] transition duration-200"
          />

          {/* Sign Up Link */}
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <p>
              Vous n'avez pas de compte?{' '}
              <a href="#" className="text-white hover:underline">Je m'inscris</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App