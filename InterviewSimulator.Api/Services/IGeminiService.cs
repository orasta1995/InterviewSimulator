namespace InterviewSimulator.Api.Services;

public interface IGeminiService
{
    Task<string> GenerateQuestionAsync(string role, string level, string sessionId);
    Task<string> GenerateFollowUpAsync(string question, string answer, string sessionId);
    Task<string> EvaluateAnswerAsync(string question, string answer, string sessionId);
}
