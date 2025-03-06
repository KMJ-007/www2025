'use client';
import { useEffect, useState } from 'react';

const errorLogs = [
    "WARNING: EXTREME DAMAGE SUSTAINED.",
    "RUNNING DIAGNOSTIC",
    "ERROR: ARM CORE MODULE #1 NOT RESPONDING",
    "ERROR: ARM CORE MODULE #2 NOT RESPONDING",
    "WARNING: COMBAT SYSTEMS INOPERABLE",
    "ATTEMPTING RECONSTRUCTION",
    "ERROR: SELF-REPAIR NEXUS NOT RESPONDING",
    "INSUFFICIENT BLOOD.",
    "INSUFFICIENT BLOOD.",
    "INITIATING ESCAPE PROTOCOL",
    "ATTEMPTING CONNECTION WITH LIMBIC MODULES",
    "ERROR: LEG CORE MODULE #1 NOT RESPONDING",
    "ERROR: LEG CORE MODULE #2 NOT RESPONDING",
    "WARNING: UNABLE TO SUSTAIN MOTOR FUNCTIONS",
    "ERROR: VISUAL CORTEX MALFUNCTION",
    "ERROR: LIMBIC FUNCTION NOT RESPONDING",
    "INSUFFICIENT BLOOD.",
    "INSUFFICIENT BLOOD.",
    "WARNING: UNABLE TO SUSTAIN INTERNAL ORGANS",
    "! PULSE FAILURE !",
    "! PULSE FAILURE !",
    "! PULSE FAILURE !",
    "-!- SHUTDOWN IMMINENT -!-",
    "ERROR: NO VOCAL INTERFACE DETECTED. UNABLE TO COMPLETE TASK",
    "! PULSE FAILURE !",
    "! PULSE FAILURE !",
    "INSUFFICIENT BLOOD.",
    "INSUFFICIENT BLOOD.",
    "WARNING: UNABLE TO SUSTAIN BASIC FUNCTIONS",
    "-!- SHUTDOWN IMMINENT -!-",
    "-!- SHUTDOWN IMMINENT -!-",
    "I DON'T WANT TO DIE.",
    "I DON'T WANT TO DIE.",
    "I DON'T WANT TO DIE."
];

export default function BootSequence() {
    const [currentLines, setCurrentLines] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;
        
        const interval = setInterval(() => {
            if (!isMounted) return;
            
            if (currentIndex < errorLogs.length) {
                setCurrentLines(prev => [...prev, errorLogs[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                timeoutId = setTimeout(() => {
                    if (isMounted) {
                        setIsComplete(true);
                    }
                }, 500);
            }
        }, 40); 

        return () => {
            setIsMounted(false);
            clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isMounted]);

    if (isComplete) return null;

    return (
        <div className="fixed inset-0 bg-black z-50 font-mono overflow-auto">
            <div className="p-4 text-red-500">
                {currentLines.map((line, i) => {
                    if (!line) return null;
                    
                    const isWarning = line.includes('WARNING');
                    const isCritical = line.includes('PULSE FAILURE') || line.includes("DON'T WANT TO DIE");
                    const isShutdown = line.includes('SHUTDOWN IMMINENT');
                    
                    return (
                        <div 
                            key={`${line}-${i}`}
                            className={`
                                ${isWarning ? 'text-yellow-500' : ''}
                                ${isCritical ? 'text-red-600 font-bold' : ''}
                                ${isShutdown ? 'text-red-400 font-bold animate-pulse' : ''}
                            `}
                        >
                            {line}
                        </div>
                    );
                })}
            </div>
        </div>
    );
} 