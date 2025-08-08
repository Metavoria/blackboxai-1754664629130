const BACKEND_API_URL = 'http://localhost:8000/api/resume/analyze';

export async function analyzeResume(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(BACKEND_API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to analyze resume');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in analyzeResume:', error);
    throw error;
  }
}

export async function generateInterviewResponse(messages) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'ollama/interview-assistant',
        messages: messages
      })
    });
    if (!response.ok) {
      throw new Error('Failed to generate interview response');
    }
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error in generateInterviewResponse:', error);
    throw error;
  }
}
