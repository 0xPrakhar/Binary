import React from 'react';

function Settings() {
  return (
    <div className="max-w-4xl mx-auto pb-10 space-y-8 animate-in fade-in duration-500">
      
      {/* Page Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-black text-slate-900">Settings</h2>
        <p className="text-slate-500 text-sm">Manage your account settings and set e-mail preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Profile Settings Section */}
        <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>👤</span> Profile Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                defaultValue="Aryan Kumar"
                className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                defaultValue="aryan.kumar@examly.com"
                className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Save Changes
          </button>
        </section>

        {/* Security Section */}
        <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>🔐</span> Security
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <p className="font-bold text-slate-800">Change Password</p>
                <p className="text-xs text-slate-500">Update your account password regularly for safety.</p>
              </div>
              <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all">
                Update Password
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <p className="font-bold text-slate-800">Two-Factor Authentication</p>
                <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
              </div>
              <div className="flex items-center h-6">
                <input type="checkbox" className="w-10 h-5 bg-slate-300 rounded-full appearance-none checked:bg-blue-600 cursor-pointer transition-all relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all checked:after:translate-x-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>⚙️</span> Preferences
          </h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors">
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
              <span className="text-sm font-medium text-slate-700">Receive email notifications for upcoming exams</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors">
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
              <span className="text-sm font-medium text-slate-700">Dark mode (Beta)</span>
            </label>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="p-8 bg-red-50/50 rounded-4xl border border-red-100">
          <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
          <p className="text-sm text-slate-500 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="px-6 py-3 bg-white border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all active:scale-95">
            Delete Account
          </button>
        </section>

      </div>
    </div>
  );
}

export default Settings;