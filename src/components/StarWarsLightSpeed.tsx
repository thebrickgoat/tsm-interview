import React, { useEffect, useRef, useCallback } from 'react';

const StarWarsLightSpeed: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    let speed = 1;
    const maxSpeed = 3;
    const minSpeed = 0;
    const speedChange = 0.002;

    // Extracting this into a useCallback to avoid recreating the function
    const handleResize = useCallback(() => {
        if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
        }

        resizeTimeoutRef.current = setTimeout(() => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        }, 200);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = () => {
            speed += speedChange;
            speed = Math.max(minSpeed, Math.min(speed, maxSpeed));

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < starsRef.current.length; i++) {
                starsRef.current[i].update();
            }

            for (let i = 0; i < starsRef.current.length; i++) {
                starsRef.current[i].draw(ctx);
            }

            window.requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < 100; i++) {
            const loc = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            };
            starsRef.current.push(new Star(loc));
        }

        animate(); 

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            // Cancel the animation frame here
        };
    }, [handleResize]);

    class Star {
        location: { x: number; y: number };
        radius: number;

        constructor(location: { x: number; y: number }) {
            this.location = location;
            this.radius = 2 + Math.random() * 2;
        }

        update() {
            const center = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            const angle = Math.atan2(
                this.location.y - center.y,
                this.location.x - center.x
            );

            this.location.x += speed * Math.cos(angle);
            this.location.y += speed * Math.sin(angle);

            if (
                this.location.x > window.innerWidth ||
                this.location.x < 0 ||
                this.location.y < 0 ||
                this.location.y > window.innerHeight
            ) {
                this.location.x = Math.random() * window.innerWidth;
                this.location.y = Math.random() * window.innerHeight;
            }

            const distToCenter = Math.sqrt(
                Math.pow(this.location.x - center.x, 2) +
                Math.pow(this.location.y - center.y, 2)
            );
            this.radius = 1 + (3 * distToCenter) / window.innerWidth / 2;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.moveTo(this.location.x, this.location.y);

            const center = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            const weight = 80 - 70 * (speed / maxSpeed);
            const pastLocation = {
                x: (weight * this.location.x + center.x) / (weight + 1),
                y: (weight * this.location.y + center.y) / (weight + 1)
            };

            ctx.lineTo(pastLocation.x, pastLocation.y);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = this.radius;
            ctx.stroke();
        }
    }

    return (
        <canvas ref={canvasRef} className="starwars-lightspeed-canvas"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}

        />
    );
};

export default StarWarsLightSpeed;