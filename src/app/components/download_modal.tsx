"use client";
import React, { useState } from 'react';

import { ReactElement } from 'react';

type DownloadModalProps = {
    icon: ReactElement,
    color: string,
    osName: string,
};

const DownloadModal = ({ icon: Icon, color, osName }: DownloadModalProps) => {
    const [checkboxClicked, setCheckboxClicked] = useState<boolean>(false);
    return (
        <>
            <button
                className={`btn ${color} btn-wide rounded-2xl w-48 shadow-2xl`}
                onClick={() => {
                    const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
                    if (modal) {
                        modal.showModal();
                    }
                }}
            >
                {Icon} {osName}

            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">End User License Agreement</h3>
                    <p className="text-sm text-gray-400">Please read and accept the terms before downloading Sortra.</p>
                    <div className='pt-5 grid gap-3'>
                        <p className='text-sm'><strong>1. License Grant:</strong> You are granted a non-exclusive, non-transferable license to use Sortra for personal and commercial purposes.</p>
                        <p className='text-sm'><strong>2. Restrictions:</strong> You may not redistribute, sell, or modify Sortra without explicit permission from the author.</p>
                        <p className='text-sm'><strong>3. Disclaimer:</strong> Sortra is provided &quot;as is&quot; without any warranties. The author is not liable for any damages resulting from the use of this software.</p>
                        <p className='text-sm'><strong>4. Data Privacy:</strong> Sortra operates entirely offline. No data is collected or transmitted to external servers.</p>
                        <p className='text-sm'><strong>5. Termination:</strong> This license is effective until terminated. You may terminate it by uninstalling Sortra.</p>
                        <p className='text-sm'><strong>6. Governing Law:</strong> This agreement is governed by applicable local laws.</p>
                    </div>
                    <div className='flex pt-5 items-center gap-2'>
                        <input className='checkbox checkbox-sm checkbox-primary' type='checkbox' onClick={() => setCheckboxClicked(!checkboxClicked)} />
                        <p className='text-xs'>I have read and accept the End User License Agreement</p>
                        <form method="dialog">
                            <button className='btn btn-sm btn-outline'>Cancel</button>
                        </form>
                        <button
                            defaultChecked={false}
                            disabled={checkboxClicked}
                            className='btn btn-sm btn-primary'>Accept & Download</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>
        </>
    );
};

export default DownloadModal;