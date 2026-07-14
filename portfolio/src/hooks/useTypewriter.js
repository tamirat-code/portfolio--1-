import { useEffect, useState } from 'react';

/**
 * Cycles through a list of words with a typewriter/backspace effect.
 * Used for the hero's role-line ("Frontend Developer" -> "Backend Engineer" -> ...).
 */
export function useTypewriter(words, typingSpeed = 65, deletingSpeed = 35, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!deleting && text === currentWord) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
