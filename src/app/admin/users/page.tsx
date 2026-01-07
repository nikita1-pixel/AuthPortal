"use client";
import React, { useEffect, useState } from 'react';
import { UserPlus, Trash2, Edit3, Mail, ShieldCheck, X, Save } from 'lucide-react';

export default function UsersPage() {
    // 1. STATE: The User List
    const [users, setUsers] = useState([
        { id: 1, name: "Nikkita Choudhary", email: "nikkitachoudhary306@gmail.com", role: "Owner", status: "Active" },
        { id: 2, name: "System Admin", email: "admin@system.com", role: "Admin", status: "Active" },
    ]);

    // 2. STATE: Modal visibility and Form data
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        // If the URL is /admin/users?action=add, open the modal automatically
        const params = new URLSearchParams(window.location.search);
        if (params.get('action') === 'add') {
            setIsModalOpen(true);
        }
    }, []);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Editor' });

    // 3. CRUD HANDLERS
    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newUser.name || !newUser.email) return;

        const userToAdd = {
            ...newUser,
            id: Date.now(),
            status: "Active"
        };

        setUsers([...users, userToAdd]); // Update list
        setIsModalOpen(false); // Close modal
        setNewUser({ name: '', email: '', role: 'Editor' }); // Reset form
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to remove this user?")) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">User Registry</h1>
                {/* OPEN MODAL BUTTON */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 rounded-lg text-sm font-bold text-white hover:bg-amber-500 transition-all shadow-lg shadow-amber-600/20"
                >
                    <UserPlus size={16} /> Add User
                </button>
            </div>

            {/* THE TABLE (READ) */}
            <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400 text-[11px] uppercase tracking-widest">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-white/[0.02]">
                                <td className="px-6 py-4">
                                    <p className="text-white font-medium">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </td>
                                <td className="px-6 py-4 text-sm">{user.role}</td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => handleDelete(user.id)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CREATE MODAL (POPS UP) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#1c1c1c] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Add New User</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white"><X size={20} /></button>
                        </div>

                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-amber-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-amber-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Access Level</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="w-full mt-1 bg-[#1c1c1c] border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-amber-500"
                                >
                                    <option value="Editor">Editor</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Viewer">Viewer</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg mt-4 transition-all flex items-center justify-center gap-2">
                                <Save size={18} /> Confirm Registration
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}