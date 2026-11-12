// Web Audio API sound synthesizer (zero external assets needed)

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleSound(val?: boolean): boolean {
  if (val !== undefined) soundEnabled = val;
  else soundEnabled = !soundEnabled;
  return soundEnabled;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function playStepSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {}
}

export function playTurnSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.setValueAtTime(580, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch {}
}

export function playSnapSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(700, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {}
}

export function playBumpSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch {}
}

export function playWinSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * 0.09;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.14, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  } catch {}
}

// Scratch Cat "Meow" Sound Synthesizer
export function playMeowSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";

    const t = ctx.currentTime;
    // Frequency pitch curve: starts around 400Hz, rises to ~900Hz, drops to 500Hz
    osc.frequency.setValueAtTime(420, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.12);
    osc.frequency.exponentialRampToValueAtTime(480, t + 0.38);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.18, t + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.43);
  } catch {}
}

export function playPopSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(1400, t + 0.04);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.05);
  } catch {}
}

export function playClickSound() {
  playPopSound();
}

export function playMagicSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const freqs = [587.33, 739.99, 880.0, 1174.66];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = ctx.currentTime + i * 0.07;
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.26);
    });
  } catch {}
}

export function playDrumSound(filename: string, volume = 1.0) {
  if (!soundEnabled) return;
  const vol = Math.max(0, Math.min(1, volume));
  if (vol <= 0) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const t = ctx.currentTime;
    const name = filename.toLowerCase();

    const makeNoise = (duration: number, filterType: BiquadFilterType, freq: number, gainPeak: number, startOffset = 0) => {
      const sampleCount = Math.max(1, Math.floor(ctx.sampleRate * duration));
      const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < sampleCount; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.setValueAtTime(freq, t + startOffset);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(gainPeak * vol, t + startOffset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + startOffset + duration);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(t + startOffset);
      src.stop(t + startOffset + duration);
    };

    if (name.includes("kick")) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(42, t + 0.16);
      gain.gain.setValueAtTime(0.45 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.18);
    } else if (name.includes("snare")) {
      makeNoise(0.14, "highpass", 1000, 0.25);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(190, t);
      osc.frequency.exponentialRampToValueAtTime(90, t + 0.08);
      gain.gain.setValueAtTime(0.22 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.09);
    } else if (name.includes("hat")) {
      makeNoise(0.06, "highpass", 6500, 0.18);
    } else if (name.includes("clap")) {
      makeNoise(0.03, "bandpass", 1800, 0.22, 0);
      makeNoise(0.03, "bandpass", 1800, 0.22, 0.012);
      makeNoise(0.12, "bandpass", 1600, 0.26, 0.024);
    } else if (name.includes("tom")) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(210, t);
      osc.frequency.exponentialRampToValueAtTime(85, t + 0.18);
      gain.gain.setValueAtTime(0.35 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.19);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.19);
    } else if (name.includes("crash")) {
      makeNoise(0.45, "highpass", 4200, 0.22);
    } else if (name.includes("perc")) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(760, t);
      osc.frequency.exponentialRampToValueAtTime(480, t + 0.07);
      gain.gain.setValueAtTime(0.24 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.08);
    } else if (name.includes("bass")) {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(55, t + 0.22);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(480, t);
      gain.gain.setValueAtTime(0.3 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.24);
    } else if (name.includes("cowbell")) {
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(750, t);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.22 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
      filter.connect(gain);
      gain.connect(ctx.destination);
      [540, 800].forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = "square";
        osc.frequency.setValueAtTime(freq, t);
        osc.connect(filter);
        osc.start(t);
        osc.stop(t + 0.16);
      });
    } else {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(220, t + 0.1);
      gain.gain.setValueAtTime(0.25 * vol, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.11);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.11);
    }
  } catch {}
}


